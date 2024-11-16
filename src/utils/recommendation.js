import * as tf from '@tensorflow/tfjs';

export const generateRecommendations = (userProfile, products) => {
  // Create a set of all possible tags and categories
  const featureSet = new Set();
  products.forEach((product) => {
    product.categories.forEach((category) => featureSet.add(category));
    product.tags.forEach((tag) => featureSet.add(tag));
  });
  const features = Array.from(featureSet);

  // Map features to indices
  const featureIndices = {};
  features.forEach((feature, index) => {
    featureIndices[feature] = index;
  });

  // Create user preference vector
  const userVector = new Array(features.length).fill(0);
  userProfile.preferredCategories.forEach((category) => {
    userVector[featureIndices[category]] = 1;
  });
  userProfile.preferredTags.forEach((tag) => {
    userVector[featureIndices[tag]] = 1;
  });

  // Compute similarity scores
  const recommendations = products.map((product) => {
    const productVector = new Array(features.length).fill(0);
    product.categories.forEach((category) => {
      productVector[featureIndices[category]] = 1;
    });
    product.tags.forEach((tag) => {
      productVector[featureIndices[tag]] = 1;
    });

    // Compute cosine similarity
    const similarity =
      tf.losses.cosineDistance(
        tf.tensor1d(userVector),
        tf.tensor1d(productVector),
        0
      ).arraySync();

    return { product, similarity };
  });

  // Sort products by similarity
  recommendations.sort((a, b) => a.similarity - b.similarity);

  // Exclude products already viewed or purchased
  const filteredRecommendations = recommendations.filter(
    (rec) =>
      !userProfile.viewedProducts.includes(rec.product.id) &&
      !userProfile.purchasedProducts.includes(rec.product.id)
  );

  return filteredRecommendations.map((rec) => rec.product);
};
