<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Compras conceptos generales
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Las compras son las adquisiciones de las empresas, se trata de suministrar de manera estable y frecuente materiales, bienes y/o servicios, para garantía de todos los recursos que necesarios en la cadena de producción. Estos bienes y/o servicios deben conseguirse en las cantidades necesarias solicitadas por cada parte de la empresa, teniendo en cuenta tiempo, costo y previendo las necesidades básicas, evitando trámites de sobrecostos y urgencias de última hora. Algunos de los conceptos más importantes se refieren a continuación.

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Sistemas Integral de Compras

    p.mb-5 El proceso de decisión de compra comienza con una clara definición e identificación de las necesidades de una empresa y conduce a un contexto general en el que se toman las decisiones, dentro del cual se trabajan alternativas posteriores. A toda esa referencia se le llama SIC (Sistema Integral de Compras) y se puede revisar a continuación con el paso a paso:

    PasosA.color-primario.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 Reconocimiento de la necesidad
          p.mb-0 Cada departamento de la empresa debe detectar o reconocer la necesidad de adquirir un producto o servicio para la gestión de sus operaciones, este departamento emite una solicitud de compra, que es un documento interno enviado informando la necesidad al departamento de compras o en su defecto al encargado.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img02.png' alt="Imagen decorativa")
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img03.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Evaluación y selección del proveedor
          p.text-start.mb-0 El departamento de compras recibe y analiza los requisitos considerando las condiciones económicas (precio, cantidad de descuento, costo, etc.), crédito (condiciones, tasas de interés) y otros factores (tiempo de entrega, calidad) para encontrar posibles proveedores. En esta etapa, el comprador debe recopilar toda la información de todos los proveedores que se considere necesaria para respaldar el análisis y la toma de decisiones.
      .row.justify-content-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 Evaluación de alternativas
          p.mb-0 Con base en la información recopilada, el comprador elige lo que es más conveniente para el negocio y decide las opciones de compra adecuadas y las ofertas para lograr un consenso en beneficio de todos.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img04.png' alt="Imagen decorativa")
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Seguimiento del pedido
          p.text-start.mb-0 Una vez que el pedido se envía al proveedor para su revisión, siempre se realiza un seguimiento del pedido y se puede ver cómo avanza la preparación de la mercancía solicitada o según lo programado o no e inclusive si ya está en camino el envío.
      .row.justify-content-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 Recepción de la mercancía
          p.mb-0 Cuando la mercadería llega al área de recepción de la empresa compradora, los documentos se verifican y ajustan y la cantidad y calidad de los artículos recibidos son consistentes con los especificados en el pedido. Si todo es correcto, proceda a importar.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img06.png' alt="Imagen decorativa")
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img07.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Seguimiento y control poscompra
          p.text-start.mb-0 La gestión de productos o servicios debe mantenerse durante los ciclos posteriores de suministro y consumo o uso para detectar defectos que puedan estar sujetos a facturación posterior a la compra.

    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Políticas
    
    p Una política de compras es un plan o base que ayuda a la toma de una decisión, son directrices para establecer criterios de abastecimiento, requisitos de todo tipo, trabajo con proveedores, condiciones de envío, condiciones de pago, precompra y otros aspectos básicos en el funcionamiento de cada empresa. En conjunto, estas políticas de compras forman parte del plan de compras y de cómo las empresas obtienen todos los productos y servicios que necesitan para operar productos de limpieza, herramientas, maquinaria, tecnología, equipos, materias primas, etc.
    p.mb-5 Las políticas de compras deben contemplar preferiblemente los siguientes aspectos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG01" data-aos="fade-right")
      div(titulo="Fuentes de abastecimiento")
        p Solicitar materiales de acuerdo con los requisitos de la empresa y dejar por escrito las condiciones en las que existe o debe existir competencia entre proveedores. Debe considerarse una mejor práctica de igualdad de oportunidades en el proceso de compra.
        p.mb-0 También especifica los requisitos que deben cumplir los proveedores, como solidez y solvencia financiera. Identifica la ubicación de la fuente y las acciones que la empresa debe tomar para asegurar un flujo continuo de material.
      div(titulo="Especificaciones de la mercancía")
        p.mb-0 Asegurar de que el producto que se compró cumpla con las especificaciones y características requeridas para el proceso.
      div(titulo="Lineamientos de precio y calidad")
        p.mb-0 El primer paso es establecer un rango de precios y calidad para sus objetivos de planificación de compras. El siguiente paso es establecer los criterios para lograr estos objetivos.
      div(titulo="Procedimientos")
        p Todos los procedimientos relacionados con las adquisiciones pueden desarrollarse individualmente, pero es importante tener políticas específicas para gestionar todos estos procesos. Las políticas de compra más comunes incluyen las siguientes características:
        ul.lista-ul--color
          li(style="margin-bottom: 2px; display: flex")
            i.fas.fa-check-circle(style="color: #91B3FA;")
            | Requisitos y características del pedido proporcionados por el proveedor.
          li(style="margin-bottom: 2px; display: flex")
            i.fas.fa-check-circle(style="color: #91B3FA;")
            | Seguimiento de pedidos.
          li(style="margin-bottom: 2px; display: flex")
            i.fas.fa-check-circle(style="color: #91B3FA;")
            | Reciba del almacén de acuerdo con el método de gestión de inventario.
          li(style="margin-bottom: 2px; display: flex")
            i.fas.fa-check-circle(style="color: #91B3FA;")
            | Control débil de recepción de producto.
          li(style="margin-bottom: 2px; display: flex")
            i.fas.fa-check-circle(style="color: #91B3FA;")
            | Categorizar documentos y validar acciones para resolución futura.
      div(titulo="Condiciones de pago y entrega")
        p.mb-0 Las condiciones de pago al proveedor deben tener prioridad sobre los planes financieros de la empresa, por lo que la política de compras es muy importante en esta etapa.
      div(titulo="Investigación y desarrollo")
        p.mb-0 La función a largo plazo es innovar y buscar nuevos materiales y proveedores para mejorar la calidad de los procesos y reducir los costes.
      div(titulo="Compras recíprocas")
        p.mb-0 En la mayoría de los casos, puede considerar el intercambio de bienes o servicios entre el proveedor y la empresa. Cada política debe establecer todas las condiciones para estos intercambios.
      div(titulo="Ética")
        p.mb-0 Principios de conducta ética y mecanismos transparentes de lucha contra la corrupción y otros males que todas las partes de la empresa deben seguir para los proveedores.

    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Función de las compras en los procesos logísticos
    
    p.mb-5 La definición más racional de una propuesta es la cantidad de bienes o servicios que vende el vendedor. Estos bienes y servicios pueden ser cualquier cosa que se les ocurra. Para seguir siendo competitivos y obtener ingresos satisfactorios en el mercado, es necesario administrar materias primas y productos a precios bajos que permitan requisitos de calidad y servicio. Para este trabajo se requieren unos objetivos que hacen de este proceso un proceso de gran importancia, como se puede ver a continuación:

    
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .bloque-texto-a.color-secundario.p-md-5.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .h4.mb-0 Objetivos de las compras 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Los objetivos fundamentales de toda compra pueden resumirse del modo siguiente:
                ul.lista-ul--color
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Mantenga la continuidad del suministro.
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Hágalo con una mínima inversión en acciones.
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Evite la duplicación, el desperdicio y la obsolescencia de materiales y productos.
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Mantenga el nivel de calidad de un material o producto de acuerdo con la idoneidad para su uso previsto.
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Compre materiales o productos a precios bajos que coincidan con la calidad y el servicio que necesita.
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Mantenga la competitividad de la empresa y mantener un margen de utilidad en términos de costos de materias primas.
      .col-lg-10
        .bloque-texto-a.color-primario.p-md-5.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              .h4.mb-0 Importancia de las compras como una tarea necesaria
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La importancia del proceso de compra radica en:
                ul.lista-ul--color
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Asegurar una fuente continua de materias primas para promover el área de producción de la empresa. 
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Intervenir directamente en el movimiento de producción y las funciones temporales de la organización, ya que gestiona directamente la ciclicidad de los argumentos. 
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | Controlar estrictamente la gestión de inventario para evitar cargas financieras al fijar el precio de los productos. 
                  li(style="margin-bottom: 2px; display: flex" data-aos="fade-left")
                    i.fas.fa-chevron-circle-right(style="color: #FE7062;")
                    | 	Determinar la calidad de los materiales adquiridos para la producción, comercialización y productos de acuerdo con las características de la demanda.

    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Selección de proveedores
    
    p.mb-5 Se entiende como proveedor a aquella persona física o jurídica que provee o suministra profesionalmente de un determinado bien o servicio a otros individuos o sociedades, como forma de trabajo o actividad económica, esperando un beneficio a cambio que puede ser económico o en especie. Esta cláusula puede aplicarse tanto a los bienes o servicios destinados a ser procesados y vendidos, como a las materias primas para su posterior modificación en elementos de producción.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img08.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 En las empresas, el departamento de compras suele ser responsable de seleccionar diferentes proveedores junto con su tratamiento. Se entiende que todo departamento de compras debe ser transparente a los ojos de la selección de sus proveedores y de esa forma evitar las opciones de corrupción que se presentan en dado caso que algunos oferentes o proveedores quieran pasar por sobre los procesos con preventas. 

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Criterios para seleccionar al proveedor
    p.mb-5 Kottler, P. &amp; Keller, K. (2016) definen la segmentación de proveedores como “el proceso de dividir a un proveedor en grupos con diferentes necesidades, características o comportamientos” construyendo relaciones para crear valor agregado. Para seleccionar correctamente un proveedor de servicios, se deben considerar varios elementos como, por ejemplo:

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span Características para seleccionar correctamente un proveedor
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
    
    p.mb-5 A continuación se relacionan los aspectos más importantes que se debe tener en cuenta para esta importante labor en la vida de una empresa:
    .row.justify-content-center.mb-4
      .col-lg-5.col-sm-10(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Tabla_Selección_de_Proveedores-ANEXO.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            .h5.text-blue.mb-0 Anexo. <a style="font-weight: 400">Aspectos para seleccionar un proveedor</a>
    
    separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.5 Negociación con proveedores
    
    p.mb-5 Según Montoya (2010) hay “muchos aspectos y consideraciones al momento de elegir uno o más proveedores. La elección no depende de una sola variable, sino únicamente de la combinación para lograr estos conjuntos para brindar una buena relación comercial específica y oportuna”, por eso se requiere un listado de criterios. Entre los principales criterios a negociar se pueden tener en cuenta:

    .row.justify-content-center.mb-5
      .col-lg-5.col-md-6
        ol.lista-ol--cuadro.lista-ol--separador
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold a
            | La seriedad en sus argumentos y cotizaciones.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold b
            | La trayectoria y conocimiento en el medio.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold c
            | La confianza que inspire por sus antecedentes.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold d
            | La imagen de sus marcas.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold e
            | Su capacidad de producción.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold f
            | Sus recursos técnicos y las actualizaciones tecnológicas.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold g
            | Sus recursos financieros.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold h
            | Sus apoyos publicitarios.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold i
            | La puntualidad en la entrega
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold j
            | El tiempo de entrega.
        hr(style="margin-top: 1em; margin-bottom: 1em")
      .col-lg-4.col-md-6(data-aos="fade-left")
        ol.lista-ol--cuadro.lista-ol--separador
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold k
            | Sus condiciones (descuentos, forma de pago, despacho, devoluciones, averías, reclamos).
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold l
            | La claridad en sus estrategias de comercialización.
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold m
            | Sus precios.
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold n
            | La calidad de sus productos y su gente
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold o
            | La estructura y profesionalismo de su fuerza de ventas. 
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold p
            | Sus servicios de posventas.
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold q
            | La rapidez y voluntad para atender oportunamente sus requerimientos.
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold r
            | La asesoría en la comercialización de sus productos.
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold s
            | Su ubicación geográfica. 
          li(style="display: flex" data-aos="fade-left")
            .lista-ol--cuadro__vineta 
              span.text-bold t
            | La naturaleza del proveedor (fabricante, representación, agente, distribuidor).
        hr(style="margin-top: 1em; margin-bottom: 1em")

    p.mb-5 Los nuevos proveedores que buscan registrar proveedores existentes en el mercado a menudo utilizan esto como su estrategia principal para ofrecer precios más bajos y condiciones de pago especiales, pero no se identifica ningún comprador. Hay que tener mucho cuidado si las condiciones son más atractivas que las normales. Los compradores experimentados encuentran estas dos variables (precio y condiciones) muy importantes para hacer una buena compra, mientras que otros factores se mencionan como importantes y deben ser considerados al momento de tomar una decisión.

    .row.justify-content-center.mb-5
      .col-lg-9
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img10.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 La clave consiste, simplemente, en observar los criterios mencionados para seleccionar los proveedores.
    
    separador
    #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.6 Alianzas estratégicas
    
    p Se trata de un acuerdo formal entre dos o más empresas para lograr un conjunto de intereses privados y comunes basados en el intercambio de recursos con resultados inciertos. 
    p Este es un plan de acción estratégico que define cómo utilizar estos recursos para obtener una mayor ventaja competitiva en los mercados desarrollados. 
    p.mb-5 Las alianzas estratégicas son un método que cada vez utilizan más empresas para compartir recursos abundantes y crecientes en una empresa y recursos escasos en otra. Se ha establecido tanto financiera como personalmente, a nivel nacional e internacional en los campos de comercio, ingeniería, tecnología, fondos, inversiones, reputación y sistemas de distribución. Basados en lo que relaciona Ariño (2007), se debe analizar la posibilidad de una alianza estratégica al: 
    
    .row.mb-5
      .col-1.d-lg-flex.d-none
      .col-lg-8
        ul.lista-ul--color
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Reducir costes y obtener economías de escala]: en sectores donde los costes fijos son altos, es necesario tener un volumen suficiente que permita a la empresa ser competitiva.
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Crear la estrategia]: los motivos estratégicos de cada empresa deben aclararse durante las negociaciones previas con alianzas o asociaciones. Como llevar a cabo importantes operaciones conjuntas, regulaciones gubernamentales y liderazgo de alianzas.
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Ganar acceso a nuevos mercados]: cuando una empresa quiere ingresar a un nuevo mercado, carece de los conocimientos básicos de las relaciones y la infraestructura necesaria para lograr una buena eficiencia de distribución de productos con los clientes.
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Ganar acceso a nuevas tecnologías]: las empresas a menudo confían en socios tecnológicos para actualizar o mejorar las tecnologías utilizadas en la producción de sus productos. No puede pagarlo y, a menudo, no tiene los recursos económicos necesarios.
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Bloquear a la competencia]: las alianzas estratégicas con socios específicos pueden dificultar que los competidores se fortalezcan a través de alianzas con socios.
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Desarrollar capacidades nuevas]: para enfrentar desafíos competitivos, las empresas pueden necesitar ciertas habilidades de las que carecen y que pueden aprender de sus socios. 
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Reducir riesgos]: algunos proyectos requieren inversiones que pueden amenazar la salud económica y financiera de la empresa debido a su tamaño y riesgos.
          li(style="margin-bottom: 2px; display: flex" data-aos="fade-right")
            i.fas.fa-chevron-circle-right(style="color: #FE7062;")
            p.mb-0 #[strong Cumplir con requisitos gubernamentales]: continúa siendo de importancia en algunos casos particulares.
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
