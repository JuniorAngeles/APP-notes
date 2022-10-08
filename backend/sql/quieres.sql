-- crear base de datos
create database notas_app;

-- usar la base de datos
use notas_app;

-- create tabla de la base de datos
create table notas(
id int not null auto_increment,
tittle varchar(100) not null,
content text,
create_at timestamp not null default current_timestamp,
update_at timestamp not null default current_timestamp on update current_timestamp,
primary key (id)
)engine=innoDB;

-- seleccionar tabla
select * from notas;

-- insertar datos
insert into notas (tittle,content) value ('mi primera nota','hola esta es mi primera nota que e creado');
-- actualizar datos
update notas set tittle = 'nota actualizada'where id = 1;
-- Este codigo es para en caso de que no se quiera conectar a la base de datos
-- Con esto le damos los permisos a la base de datos
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Junior@123';

-- --borrar notas por id--
delete from notas where id = 1;

-- borrar los datos de la tabla notas
truncate table notas;

-- eliminar base de datos por completo
drop database notas_app;