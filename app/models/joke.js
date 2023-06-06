import Model, { attr } from '@ember-data/model';

export default class JokeModel extends Model {
  @attr('string') category;
  @attr('string') type;
  @attr('string') setup;
  @attr('string') delivery;
  @attr flags;
  @attr('boolean') safe;
  @attr('string') lang;
}
