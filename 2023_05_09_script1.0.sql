create database if not exists SAXoBLOG;

use SAXoBLOG;

create table if not exists usuario(
idUsuario int auto_increment primary key,
nome varchar(45),
sobrenome varchar(45),
dtNasc date,
sexo char(1),
email varchar(45),
senha char(8)
);
create table if not exists saxofone(
idSax int PRIMARY KEY auto_increment,
tipo varchar(45),
apelido varchar(45),
anoFabricacao date,
marca varchar(45),
fkUsuario int,
constraint foreign key (fkUsuario) references usuario(idUsuario)
-- constraint primary key (idSax, fkUsuario)
);

select * from usuario;	
select*from saxofone;
select*from usuario join saxofone on idUsuario=fkUsuario;

INSERT INTO saxofone (fkUsuario, tipo, apelido, anoFabricacao, marca) VALUES ('${fkUsuario}', '${tipo}', '${apelido}', '${anoFabricacao}', '${marca}');