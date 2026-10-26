const toast = document.querySelector('#toast');
let toastTimer;

function notify(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
}

document.querySelector('#createBucket').addEventListener('click', () => {
  const name = 's3-lab-mi-primer-bucket';
  document.querySelector('#bucketName').textContent = name;
  document.querySelector('#bucketHint').textContent = 'Bucket creado · Listo para cargar objetos';
  document.querySelector('.stats article strong').textContent = '2';
  notify('Bucket creado correctamente en us-east-1');
});

document.querySelector('#tourButton').addEventListener('click', () => {
  document.querySelector('#bucket').scrollIntoView({ behavior: 'smooth' });
  notify('Recorrido iniciado: continúa con el módulo 02');
});

document.querySelector('#resetLab').addEventListener('click', () => {
  document.querySelector('#bucketName').textContent = 'Aún no hay buckets';
  document.querySelector('#bucketHint').textContent = 'Crea un bucket para comenzar a almacenar objetos';
  document.querySelector('.stats article strong').textContent = '1';
  notify('El laboratorio se restauró a su estado inicial');
});
