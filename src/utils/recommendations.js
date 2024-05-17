// src/utils/recommendations.js
export const getRecommendations = (users, currentUser) => {
    // Weight calculation function
    const weight = (user) => {
      let score = 0;
      if (user.university === currentUser.university) score += 5;
      currentUser.interests.forEach((interest) => {
        if (user.interests.includes(interest)) score += 2;
      });
      return score + Math.random(); // Add some randomness
    };
  
    // Filter users from other universities
    const otherUniversities = users
      .filter((user) => user.university !== currentUser.university)
      .map((user) => user.university)
      .filter((value, index, self) => self.indexOf(value) === index) // Unique universities
      .slice(0, 3); // Choose at most 3 other universities
  
    // Filter users from other universities
    const usersFromOtherUniversities = otherUniversities.flatMap((university) =>
      users.filter((user) => user.university === university)
    );
  
    // Choose remaining recommendations from currentUser's university
    const remainingCount = 10 - Math.min(3, usersFromOtherUniversities.length);
    const usersFromCurrentUserUniversity = users
      .filter((user) => user.university === currentUser.university && user.id !== currentUser.id)
      .slice(0, remainingCount);
  
    // Combine recommendations from other universities and currentUser's university
    let recommendations = [...usersFromOtherUniversities, ...usersFromCurrentUserUniversity];
  
    // Sort recommendations by weight
    recommendations.sort((a, b) => weight(b) - weight(a));
  
    // Truncate recommendations to 10 items
    recommendations = recommendations.slice(0, 10);
  
    return recommendations;
  };
  