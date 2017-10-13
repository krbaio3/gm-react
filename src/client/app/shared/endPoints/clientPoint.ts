import * as Request from '../request-config/request';

export function getClient() {
  return {
    url:'/cliente/:clienteId',
    header: Request.getRequest(), 
  };
}

export function getAllClients() {
  return {
    url:'/cliente',
    header: Request.getRequest(), 
  };
}

export function postClient() {
  return {
    url:'/cliente',
    header: Request.postRequest(), 
  };
}

export function putClient() {
  return {
    url:'/cliente/:clienteId',
    header: Request.putRequest(), 
  };
}
    
export function deleteClient() {
  return {
    url:'/cliente/:clienteId',
    header: Request.deleteRequest(), 
  };
}
