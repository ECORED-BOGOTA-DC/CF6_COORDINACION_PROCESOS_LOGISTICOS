<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Las ventas y la calidad son elementos fundamentales para el crecimiento de una empresa, pero las compras también juegan un papel preponderante en su realidad. Se invita a ver el siguiente video, el cual nos ayudará a comprender la importancia estratégica de las compras y cómo pueden contribuir al éxito empresarial en todos sus aspectos:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/xyq1mmIb-X0?si=GzZ02ocDf5TQzU9O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
