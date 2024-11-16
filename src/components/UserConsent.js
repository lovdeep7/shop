import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserConsent = () => {
  const { userProfile, setUserProfile } = useContext(UserContext);

  if (userProfile.consentGiven) {
    return null;
  }

  const handleConsent = () => {
    setUserProfile({ ...userProfile, consentGiven: true });
  };

  return (
    <div className="consent-banner">
      <p>
        We use your data to personalize your experience. Do you consent to this?
      </p>
      <button onClick={handleConsent}>I Consent</button>
    </div>
  );
};

export default UserConsent;
