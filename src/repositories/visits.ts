import countApi from '../config/api';

const countApiNamespace = process.env.COUNTAPI_NAMESPACE || 'ton-challenge';
class VisitsRepository {
  async incrementVisits() {
    try {
      const { data: { value } } = await countApi.get(`/hit/${countApiNamespace}`);
      return value || 0;
    } catch {
      throw new Error('Error when try to increment visits');
    }
  }

  async getVisits() {
    try {
      const { data: { value } } = await countApi.get(`/get/${countApiNamespace}`);
      return value || 0;
    } catch {
      throw new Error('Error when try to get visits');
    }
  }
}

export default VisitsRepository;
