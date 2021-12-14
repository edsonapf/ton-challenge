let visitsCounter = 0;

class VisitsRepository {
  async incrementVisits() {
    return new Promise((resolve) => {
      visitsCounter += 1;
      resolve(visitsCounter);
    });
  }

  async getVisits() {
    return new Promise((resolve) => resolve(visitsCounter));
  }
}

export default new VisitsRepository();
