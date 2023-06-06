import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    // Check if the response has "setup" and "delivery" keys, and wrap the data in an array
    if (payload.setup && payload.delivery) {
      payload = {
        data: {
          id,
          type: primaryModelClass.modelName,
          attributes: {
            setup: payload.setup,
            delivery: payload.delivery,
          },
        },
      };
    } else {
      // If the response doesn't match the expected format, return the payload as is
      return super.normalizeResponse(...arguments);
    }

    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
