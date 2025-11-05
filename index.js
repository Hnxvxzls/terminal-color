// Importamos la librería chalk (Paso 7)
import chalk from 'chalk';

// Mensajes iniciales (Paso 7)
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica (Paso 7)
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función (Paso 7)
saludar("Equipo JS");

// --- Tarea Equipo A (Paso 8) ---
function mostrarEstado() {
  console.info(chalk.blue('ℹ️ Iniciando programa...'));
  console.log(chalk.gray('Proceso en ejecución...'));
  console.warn(chalk.yellow('⚠️ Alerta de memoria baja (simulación).'));
  console.log(chalk.green('✅ Proceso finalizado con éxito.'));
}
// Llamamos a la nueva función para probarla

function simularError() {
  console.warn(chalk.yellow.bold('⚠️ ADVERTENCIA: Se detectó un problema de red (simulación).'));
  console.error(chalk.red.bold('❌ ERROR CRÍTICO: No se puede conectar al servidor.'));
  console.log(chalk.green('✅ Sistema de recuperación activado...'));
}
simularError();