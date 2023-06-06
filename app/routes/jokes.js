import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class JokesRoute extends Route {
  @service store;

  async model() {
    const response = await fetch(
      'https://v2.jokeapi.dev/joke/Any/api/jokes?random=true'
    );
    const data = await response.json();

    const jokePayload = {
      category: data.category,
      type: data.type,
      setup: data.setup,
      delivery: data.delivery,
      flags: data.flags,
      safe: data.safe,
      lang: data.lang,
    };

    // Create a new joke record with a temporary identifier
    const joke = this.store.createRecord('joke', jokePayload);

    // Update the joke record with the actual identifier from the API response
    joke.set('id', data.id);

    return joke;
  }
}
