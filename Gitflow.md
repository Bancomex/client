# Como adoptar una feature y mandarla

1. Antes que nada deberas estar en la rama main, `$ git checkout main`
2. Debes hacer pull hacia esta misma para tener los cambios mas actuales en tu repo local `$ git pull origin main`
3. Ahora deberás hacer una rama para trabajar sobre ella. El nombre de esta rama puede ser la que quieras, pero de preferencia toma de referencia las primeras lineas de este documento. Otra opcion es que sea tu nombre para poder preguntarte si se tiene dudas `$ git checkout -b feature/login`
4. Es hora de escribir, cada que creas necesario o crees que el cambio tenga importancia, o resuelvas algo, deberías guardar en stagin `$ git add .` y despues hacer un commit con el comentario basado en las lineas de arriba de este mismo documento, aunque puedes escribir lo que creas necesario `$ git commit -m "feature(components/login): se agrego funcionalidad al logion"`

5. Mandar cambios al repo en github: deberás correr de nuevo

