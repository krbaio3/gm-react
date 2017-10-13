import { ClienteEntity } from '../model/cliente';
import { ClientMockData } from './clientMockEntity';
import * as ClientPoint from '../shared/endPoints/clientPoint';

class ClienteAPI {

  getAllClients() : Array<ClienteEntity> {
    return ClientMockData;
  }
  getClient(numDoc) {
    fetch(ClientPoint.getClient().url, ClientPoint.getClient().header)
    .then((response) => {
      return response.json();
    })
      .then((recurso) => {
        console.log(recurso);
      });
  }

  saveClient(cliente: ClienteEntity) {
    fetch(ClientPoint.postClient().url, ClientPoint.postClient().header)
    .then((response) => {
      return response.json();
    })
      .then((recurso) => {
        console.log(recurso);
      });
  }

  updateClient(cliente: ClienteEntity) {
    fetch(ClientPoint.putClient().url, ClientPoint.putClient().header)
    .then((response) => {
      return response.json();
    })
      .then((recurso) => {
        console.log(recurso);
      });
  }

  deleteClient(numDoc) {
    fetch(ClientPoint.deleteClient().url, ClientPoint.deleteClient().header)
    .then((response) => {
      return response.json();
    })
      .then((recurso) => {
        console.log(recurso);
      });
  }
}

// tslint:disable-next-line:variable-name
export const clienteAPI = new ClienteAPI();

