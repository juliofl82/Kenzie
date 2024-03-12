/*
  Importe corretamente as constantes usuarios e enderecos dos arquivos
  dbUsers.js e dbAdress.js, respecitvamente
*/
import {usuarios} from "./dbUsers.js";
import { enderecos } from "./dbAddress.js";


// Faça as importações corretas acima
console.log(usuarios);
console.log(enderecos);

// Adicionar endereços aos usuarios pelo id
function addAddresToUser(listaDeUsuarios, listaDeEnderecos) {
  const usuariosAddEnderecos = listaDeUsuarios.map(usuario => ({ ...usuario }));
  usuariosAddEnderecos.forEach(usuario => {
    const enderecoEncontrado = listaDeEnderecos.find(endereco => endereco.userId === usuario.id);
    if (enderecoEncontrado) {
      usuario.endereco = enderecoEncontrado.endereco;
    }

  });
  return usuariosAddEnderecos;
}

// Descomente os consoles abaixo para testar suas funções
console.log(addAddresToUser(usuarios, enderecos));

// Funcao para deletar o password
function deletePassword(usuario) {
  const { password, ...usuarioSemPassword } = usuario;  
  return usuarioSemPassword;
}
console.log(deletePassword(usuarios[0]));

// Listar os usuarios sem a senha
function listUsers(usuarios) {
  
    const usuariosSemPassword = usuarios.filter(usuario => usuario.password === undefined);    
    return usuariosSemPassword;  
};

// Listar somente nome, email e stack
function listUserStacks(listaDeUsuarios) {
  return listaDeUsuarios.map(usuario => ({
    nome: usuario.nome,
    email: usuario.email,
    stacks: usuario.stacks
  }));
}
console.log(listUserStacks(usuarios));

//Deletar um usuário que tenha python na stack
function deleteUser(listaDeUsuarios) {
  const usuariosAtualizados = listaDeUsuarios.filter(usuario => !usuario.stacks.includes('Python'));
  return usuariosAtualizados;
}
console.log(deleteUser(usuarios));
