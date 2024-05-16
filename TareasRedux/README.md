# Lista de Tareas

- Estado de la lista de tareas: Un array de objetos con cada tarea, cada objeto contendrá:
  - un ID
  - título
  - estado (completada o no).
- **Acciones**:
  - Agregar tarea
  - Eliminar tarea
  - Marcar tarea como completada.

Para gestionarlo con Redux, crea un reducer que actualice el estado de estas acciones. Al agregar una tarea, el reducer añade un nuevo objeto tarea al array. Al eliminar una tarea, el reducer filtraría el array para eliminar la tarea correspondiente. Al marcar una tarea como completada, el reducer actualizaría el estado de la tarea apropiada.
