import { EntityManager, getManager } from 'typeorm';

export default class EntityManagerDb {
  private entityManager: EntityManager;

  getEntityManager = () => {
    if (!this.entityManager) {
      this.entityManager = getManager();
    }

    return this.entityManager;
  };
}
