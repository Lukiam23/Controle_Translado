CREATE DATABASE unichristus;

CREATE EXTENSION pgcrypto;

CREATE TABLE Usuarios(
	usuarioId SERIAL PRIMARY KEY,
	nome Text NOT NULL,
	login Text NOT NULL UNIQUE,
	senha Text NOT NULL,
	tipo VARCHAR(13) NOT NULL CHECK (tipo = 'aluno' or tipo = 'administrador')
);

CREATE TABLE Veiculos(
	veiculoId SERIAL PRIMARY KEY,
	descricao Text NOT NULL,
	ocupacaoMax INT NOT NULL,
	quantidadeOcupado INT
);

CREATE TABLE Destinos(
	destinoId SERIAL PRIMARY KEY,
	nome Text NOT NULL,
	sigla Text NOT NULL
);

CREATE TABLE Translados(
	transladoId SERIAL PRIMARY KEY,
	data DATE,
	turno Text,
	usuarioId SERIAL,
	veiculoId SERIAL,
	destinoId SERIAL,
	CONSTRAINT foreignVeiculo
		FOREIGN KEY(veiculoId)
			REFERENCES Veiculos(veiculoId) ON DELETE CASCADE,
	CONSTRAINT foreignUsuario
		FOREIGN KEY(usuarioId)
			REFERENCES Usuarios(usuarioId) ON DELETE CASCADE,
	CONSTRAINT foreignDestino
		FOREIGN KEY(destinoId)
			REFERENCES Destino(destinoId) ON DELETE CASCADE

);

INSERT INTO Usuarios(usuarioId, nome, login, senha, tipo) values(DEFAULT, 'Matheus', 'Matheus23', crypt('new password', gen_salt('bf')), 'administrador' ) ;
