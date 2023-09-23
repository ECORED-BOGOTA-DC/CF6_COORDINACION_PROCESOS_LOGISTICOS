<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-right") Las ventas y la calidad son elementos fundamentales para el crecimiento de una empresa, pero las compras también juegan un papel preponderante en su realidad. Se invita a ver el siguiente video, el cual nos ayudará a comprender la importancia estratégica de las compras y cómo pueden contribuir al éxito empresarial en todos sus aspectos:
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MSnPt9SUzSI?si=XtFHEU6sWDjxtU_p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
