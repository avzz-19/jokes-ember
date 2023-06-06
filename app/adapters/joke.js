import RESTAdapter from '@ember-data/adapter/rest';

export default class JokeAdapter extends RESTAdapter {
  host = 'https://v2.jokeapi.dev/joke/Any';
  namespace = 'api';
}
