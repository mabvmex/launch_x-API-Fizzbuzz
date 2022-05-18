# 2.- Ejercicio básico de API/express Fizzbuzz <br>[Semana 4] 

- Se hace uso de la nueva clase `controller` que será con la que conectemos nuestro servidor al resto de componentes y sus funcionalidades:

|Clase ExplorerController|Métodos
|---|---|
| ExplorerController| getExplorersUsernamesByMission(mission)|
| ExplorerController| getExplorersAmonutByMission(mission)|
<br>

- Se crea el servidory se agregan los endpoints: <br>

|Endpoint|Request|
|---|---|
|localhost:3000/v1/explorers/:mission | localhost:3000/v1/explorers/node|
|localhost:3000/v1/explorers/amount/:mission | localhost:3000/v1/explorers/amount/node|
|localhost:3000/v1/explorers/usernames/:mission | localhost:3000/v1/explorers/usernames/node|
<br>

- Se agregan pruebas con Jest.
