create database SAXoBLOG;
use SAXoBLOG;

create table usuario(
idUsuario int auto_increment primary key,
nome varchar(45),
sobrenome varchar(45),
dtNasc date,
sexo char(1),
email varchar(45),
senha char(8)
);
create table saxofone(
idSax int auto_increment,
apelido varchar(45),
anoFabricacao date,
marca varchar(45),
tipo varchar(45),
fkUsuario int,
constraint foreign key (fkUsuario) references usuario(idUsuario),
constraint primary key (idSax, fkUsuario)
);

select*from usuario join saxofone on idUsuario=fkUsuario;