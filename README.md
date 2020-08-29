# Practica 3 Software Avanzado -  Coreografía de servicios

Esta aplicación conecta 3 microservicios que simulan una aplicación de crowdsourcing de comida a domicilio. 
Los microservicios son:
- Restaurante: simula la recepción y envío de pedidos de los clientes hacia los repartidores.
- Repartidor: recibe los pedidos del restaurante y los entrega al cliente.
- Cliente: realiza los pedidos y puede solicitar información acerca del estado de los mismos al restaurante y al repartidor.

## Instalación

Se necesita instalar Node.js para levantar los servidores, así como el módulo express. También se necesita el modulo make-runnable para ejecutar los scripts para realizar las solicitudes entre los microservicios.

## Uso

Se necesitan abrirse 3 terminales para levantar cada microservicio, con el comando
``` 
node index.js
```
en cada carpeta raíz de los microservicios.
El microservicio del restaurante se levantará en el puerto 3000 de localhost, el microservicio del repartidor se levantará en el puerto 4000 y el microservicio del cliente en el puerto 5000.
Una vez estén los servicios levantados, se pueden ejecutar los scripts para realizar solicitudes del cliente al restaurante y repartidor, del restaurante al repartidor y del repartidor al cliente y al restaurante, los cuales devolverán un mensaje en consola mostrando el resultado de la solicitud.

Para ejecutar los scripts, solo basta con ejecutarlos haciendo uso de node como se muestra acontinuación:
```
node verificar_pedido_restaurante.js
```

## Desarrollado con
- Node.js - framework para la arquitectura REST utilizada para crear los microservicios.
- Express - framework de Node.js que permite crear las API REST.
## Contribución.
Pull requests para mejorar el codigo o la presentación de la página son bienvenidas.

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)