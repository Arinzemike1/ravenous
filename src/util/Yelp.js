const apiKey = 'IrpYJ0Y1izkugouGnZnYcufaCupkZDdsaIW2Ry-dmxe3KW4kljy2DlpqtP-u-HVbcj6nN0I8LGo1W1jgIKXETVZdpc71YcfRlFpddI0ufCIxgcm-FvaDsbr3ihMQX3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
