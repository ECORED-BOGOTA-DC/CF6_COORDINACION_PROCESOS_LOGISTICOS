<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Gestión de compras
    
    p.mb-5(data-aos="fade-right") Las compras son más que relacionar insumos con dinero, esto es lo que más se confunde dentro de los departamentos de compras, como se puede ver en el siguiente recurso:

    .BGR02.p-4.mb-5(data-aos="zoom-in")
      SlyderA.mt-4(tipo="b")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Logística del aprovisionamiento
            p.mb-0 Incluye el proceso de compra y almacenamiento de productos, materias primas, materiales, piezas y componentes, desde el inicio del proceso de producción desde el proveedor hasta el fabricante.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img01.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Compra, almacenamiento y gestión de inventarios
            p.mb-0 La gestión de adquisiciones abarca compras, almacenamiento y gestión de inventarios, optimizando los sistemas logísticos para un funcionamiento eficiente y efectivo.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img02.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Compras
            p.mb-0 La compra, como una función comercial intrínsecamente más limitada, tiene como objetivo garantizar que la empresa obtenga los bienes y servicios que necesita, y que la cantidad requerida se suministre de manera oportuna con calidad y precio.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img03.svg' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-4.order-lg-1.order-2
            .h4 Las adquisiciones
            p.mb-0 Son procesos esenciales para establecer relaciones sólidas con proveedores. Las empresas los ven como aliados estratégicos y buscan construir relaciones basadas en confianza y beneficios mutuos. La elección adecuada de proveedores es crucial para el éxito. La selección y evaluación cuidadosa es vital, junto con un proceso de compra eficiente para optimizar la cadena logística.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img04.svg' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") Un proceso de compras eficiente es esencial para el éxito de cualquier intermediario. Las tendencias actuales en la gestión de compras son:

    .row.justify-content-center.mb-5
      .col-lg-10
        ol.lista-ol--cuadro.lista-ol--separador.mb-0
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold 1
            p.mb-0 #[strong Investigar a los proveedores y buscarlos de forma activa]. Es una amplia búsqueda de los mejores  proveedores. Por tanto, no hay que esperar a los proveedores, sino que hay que desarrollar un trabajo de investigación activo sobre varios criterios.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold 2
            p.mb-0 #[strong Aumentar la información sobre los productos, costes y proveedores que maneja el departamento de compras]. Para identificar correctamente el requerimiento y escoger correctamente los proveedores.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold 3
            p.mb-0 #[strong Disminuir el número de proveedores]. Para reducir los costos de compra y de gestión sin que esto afecte los ingresos ni salidas de la empresa, se recomienda ganar productividad todo el tiempo.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold 4
            p.mb-0 #[strong Aumentar las compras a cada proveedor]. Tener más poder de negociación para ser un buen comprador e incluso ser deseado como comprador por otros proveedores que faciliten la consecución de los recursos.
          li(style="display: flex" data-aos="fade-right")
            .lista-ol--cuadro__vineta 
              span.text-bold 5
            p.mb-0 #[strong Cooperar y coordinarse con el proveedor para disminuir costes]. La colaboración con los proveedores es esencial para obtener el producto al menor costo y de manera oportuna.
    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Funciones de la gestión de compras

    p(data-aos="fade-right") La compra es un elemento estratégico, no una actividad más de la empresa, su objetivo es asegurar a los mejores proveedores con los mejores productos y servicios al mejor valor total. Dicho esto, la gestión de compras tiene por objetivo adquirir los bienes y servicios que la empresa necesita, garantizando el abastecimiento de las cantidades requeridas en términos de tiempo, calidad y precio.
    p.mb-5(data-aos="fade-right") Las funciones que cumple la gestión de compras son fundamentalmente: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG01" data-aos="fade-right")
      div(titulo="Función adquisición")
        p.mb-0 Esta primera función se refiere a comprar materias primas y proveedores; datos indirectos; accesorio; máquinas, equipos, herramientas, muebles, etc.; papelería; servicios (por ejemplo, fletes) necesarios para otras actividades comerciales.
      div(titulo="Función apoyo a las operaciones bidireccional")
        p La función de soporte de operaciones comerciales es garantizar un flujo constante y continuo de materiales a la empresa. También se considera  que se tendrá un impacto en estos entornos, asegurando y controlando los recursos necesarios para mantener los procesos operativos.
        p.mb-0 Por lo tanto, la empresa promedio obtiene materiales, componentes y productos que se convierten y venden, o que proporcionan valor de los proveedores. Los productos manufacturados se envían a través de una red logística para agregar valor a lo largo del tiempo.
      div(titulo="Función de flujo estable y continuo de materiales")
        p.mb-0 Mantener niveles óptimos de inventario dentro de la instalación, asegurar un suministro adecuado de líneas de producción o mantener altos niveles de servicio al cliente, ya sean materias primas, repuestos o productos básicos, conduce a altos niveles de competencia y suministro. Es esencial asegurar los esfuerzos del área de mercadeo para asegurar altos niveles de competitividad.
      div(titulo="Función de valoración y evaluación objetiva de proveedores")
        p.mb-0 Para lograr un flujo de material óptimo, es necesario establecer una evaluación continua de proveedores con un conjunto de criterios de evaluación. Suponga que el producto requerido es técnicamente adecuado. Después de la evaluación inicial, se debe considerar una revisión continua de los criterios de cada proveedor.

    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Gestión de proveedores
    
    p.mb-5(data-aos="fade-right") Apoyados en el concepto de Sangri (2016), se puede decir que la gestión de proveedores es un proceso de varios pasos mediante el cual los compradores inician y desarrollan relaciones con los proveedores de bienes y servicios necesarios para sus operaciones y misiones diarias. Los primeros pasos para gestionar una relación con un proveedor desde la perspectiva del comprador son:

    ImagenInfografica.color-primario.circle-white.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/img05.svg')

      .BGR03F.p-3(x="28.58%" y="88.7%" numero="1")
        p.mb-0 Este comentario lo basamos en que el área de compras debe conocer el o los lugares donde existen proveedores para la materia prima, componentes e insumos necesarios, es decir, tener a disposición otras opciones por si falla uno de ellos.
      .BGR03E.p-3(x="36.25%" y="73.3%" numero="2")
        p.mb-0 El área de compras conoce todo lo relacionado específicamente con la fabricación de materias primas. Así puede permitirse procesar su pedido a tiempo, según las especificaciones.
      .BGR03D.p-3(x="43.5%" y="58%" numero="3")
        p.mb-0 Investigar y analizar para determinar condiciones, clasificar según diversos factores cuantitativos y cualitativos y atraer pedidos de acuerdo con la política de la empresa.
      .BGR03C.p-3(x="50.9%" y="42.5%" numero="4")
        p.mb-0 Realizar la debida diligencia en función de la naturaleza de la participación del proveedor.
      .BGR03B.p-3(x="58.1%" y="27%" numero="5")
        p.mb-0 El área de compras no debe tener intermediarios y siempre debe tratar directamente con los proveedores.
      .BGR03A.p-3(x="65.8%" y="11.5%" numero="6")
        p.mb-0 El cumplimiento de la especificación, en particular las políticas de la empresa, requiere una comunicación clara y directa con los proveedores.

    separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Acuerdos y alianzas comerciales con proveedores
    
    p.mb-5(data-aos="fade-right") Cada vez son más comunes las relaciones de confianza comercial entre los proveedores y los clientes a las que se les llama acuerdos, como se refiere en el siguiente recurso:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in")
      .p-md-4.p-3(titulo="Acuerdo cliente y proveedor")
        .row.justify-content-around
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")
          .col-lg-6
            p.mt-5.mb-0 En muchos tipos de compañías se están implementando acuerdos de servicio entre el cliente y el proveedor, como un avance significativo en la generación de relaciones comerciales basadas en la confianza, en la mutua complementariedad y en el mejoramiento progresivo de ambas partes, para generar un bienestar común. Este tipo de relaciones genera sinergias adicionales que permiten, en el tiempo, constituir verdaderas alianzas estratégicas. Se trata de relaciones sensibles en el desarrollo de las compañías y su cadena de valor.
      .p-md-4.p-3(titulo="Evolución en las relaciones")
        .row.justify-content-around
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img07.svg' alt="Imagen decorativa")
          .col-lg-6
            p.mt-5.mb-0 Esta evolución en las relaciones que puede mantener una empresa con sus proveedores hacia la formación de alianzas estratégicas. Estas surgen entre el comprador y el proveedor, donde se establecen, estipulan y/o pactan las especificaciones, condiciones, restricciones y/o concesiones, para la compra-venta de los bienes que necesita o requiere la empresa.
      .p-md-4.p-3(titulo="Cooperación con proveedores")
        .row.justify-content-around
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img08.svg' alt="Imagen decorativa")
          .col-lg-6
            p.mt-5 Las causas de esta tendencia pueden ser muy variadas como lo enuncian García, Marco, Molina y Quer R., D (1999) ya que relaciona tres motivos principales que llevan a una empresa a cooperar estratégicamente con sus proveedores:
            ol.lista-ol--cuadro.lista-ol--separador
              li(style="display: flex")
                .lista-ol--cuadro__vineta
                  span.text-bold 1
                | Las presiones competitivas del entorno.
              li(style="display: flex")
                .lista-ol--cuadro__vineta
                  span.text-bold 2
                | La importancia de los inputs a comprar para el producto.
              li(style="display: flex")
                .lista-ol--cuadro__vineta
                  span.text-bold 3
                | Los recursos y capacidades de la empresa.
      .p-md-4.p-3(titulo="Capacidades de la empresa")
        .row.justify-content-around
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img09.svg' alt="Imagen decorativa")
          .col-lg-6
            p.mt-5.mb-0 Las capacidades de la empresa son consideradas para brindar apoyo a los proveedores en la mejora de productos y procesos, estos serían los motivos desencadenantes de la alianza, la cual permite a su vez mejorar la productividad a corto plazo (reducción de inventarios, productos defectuosos, etc.), así como conseguir beneficios estratégicos o ventajas competitivas a más largo plazo (aumento de la cuota de mercado, mayor velocidad en el desarrollo de nuevos productos, mejoras en la calidad, en la estructura de costes, etc.). Quizás una de las mayores ventajas sea el acceso a la tecnología del socio, ya que la alianza permite a una empresa tener un proveedor tecnológicamente avanzado que le puede ayudar en el desarrollo de sus productos.

    p.mb-5(data-aos="fade-right") Entre el proveedor y el cliente se inician los acercamientos y se hacen varias visitas de manera secuencial para finalmente llegar a ser aliados estratégicos, así:

    .row.mb-5(data-aos="fade-right")
      .col-lg-10
        TabsA.color-acento-botones
          .tarjeta.BG04.p-4(titulo="Acuerdo de expectativas")
            p.mb-0 Una vez que se establecen estas relaciones y la confianza, se establece la integración entre el proveedor y el comprador. Debe haber una asociación entre ellos dos para que puedan evaluar conjuntamente sus expectativas para el desarrollo y mejora de la relación.
          .tarjeta.BG04.p-4(titulo="Acuerdos de servicio")
            p.mb-0 El ideal de una relación estructurada entre un cliente y un proveedor es un contrato formal (oferta comercial), que describe cómo se ejecuta un contrato de servicio. Se debe gestionar las relaciones comerciales para garantizar una liquidez complementaria superior (como órdenes de compra, contratos, pólizas).
          .tarjeta.BG04.p-4(titulo="Relaciones gana - gana")
            p.mb-0 El concepto más avanzado de un contrato de servicio es establecer una relación de beneficio mutuo entre un cliente y un proveedor. Cuando ambas partes entienden que un conflicto de intereses es claramente un esfuerzo programado en conjunto para encontrar alternativas y validar valores y acuerdos que les permitan avanzar de manera significativa.

    separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Costos de comprar
    
    p.mb-5(data-aos="fade-right") Ninguna actividad que se realiza en las organizaciones es gratuita, en el trabajo logístico los costos logísticos están dispersos en varias actividades, lo cual dificulta su adecuada identificación y análisis; sin embargo, se propone trabajar en los siguientes costos como básicos:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-9
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img10.svg')
          .tarjeta.BGR03F.p-3(x="60%" y="11%" numero="1")
            p Son costos incurridos por una empresa u organización para asegurar un cierto nivel de servicio a sus clientes y proveedores. Según (Ballou, 2005), existen varias clasificaciones. Estos son los costos de distribución, los costos de adquisición física y los costos de servicio al cliente.
            p.mb-0 Para el caso que nos compete, en relación a las compras, se estimaran los costos según los suministros físicos:
          .tarjeta.BGR03F.p-3(x="60%" y="43%" numero="2")
            p Son costos que tienen que ver con transporte de bienes de suministro o insumos, costo de inventarios de bienes de suministro o insumos, costo de procesamiento de pedidos, costo de almacenamiento, costo de administración y gastos generales asociados a los costos de suministro. Hay que tener en cuenta que este costo posee categorías similares al de los costos de distribución y en ambos casos es necesario ejercer control.
            p.mb-0 Dentro de los costos de suministro físico encontramos:
          .tarjeta.BGR03F.p-3(x="28%" y="81%" numero="3")
            p.mb-0 Se incluyen todos los costos necesarios para reponer suministros o productos. Estos costos deben tener en cuenta los costos laborales (personal de compras y almacén), los costos inmobiliarios (espacio y mantenimiento de oficinas y almacenes), deudas, costos de adquisiciones, enlaces, recepción de bienes y cheques. Según organizaciones internas, algunas empresas dividen estos costos en costos fijos y costos variables.
          .tarjeta.BGR03F.p-3(x="60%" y="81%" numero="4")
            p.mb-0 Los elementos de esta categoría son el valor promedio de inventario, primas de seguros, impuestos a la propiedad, costos laborales, costos de uso o espacio, costos de envejecimiento y costos de mantenimiento.
          .tarjeta.BGR03F.p-3(x="93%" y="81%" numero="5")
            p.mb-0 En este costo se identifican tres grupos de actividades asociadas a la administración de los inventarios: #[strong tareas relacionadas con las entradas] (generación de etiquetas de ubicación, identificación de los productos recibidos, control de calidad y cantidad de los insumos y bienes recibidos, etc.), #[strong tareas relacionadas con las salidas y expediciones] (elaboración de listas de empaque, remisiones, edición de órdenes de extracción, y órdenes de #[em picking], control de calidad para las expediciones, entre otros), y #[strong tareas asociadas con el control de existencias] (por ejemplo, conteos físicos del inventario).

    separador
    #t_2_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.5 Gestión de compras y su relación con otros procesos logísticos
    
    p.mb-5(data-aos="fade-right") La definición del proceso de gestión de compras incluye la labor logística, no se puede decir que sea un error esa afirmación, pero sobre el papel organizativo y funcional de las empresas, se trata de dos segmentos diferenciados por sus tareas y posición en la cadena de suministro; así pues, se puede definir que:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tabla-a.color-primario
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead
              tr
                th(style="background-color: #E8E8E8; border: 3px solid #AFAFAF; font-size: 18px;") Gestión de compras
                th(style="background-color: #E8E8E8; border: 3px solid #AFAFAF; font-size: 18px;") Logística
            tbody
              tr
                td(style="border: 3px solid #AFAFAF; padding: 2.5em") Es la negociación y adquisición de bienes o servicios para una empresa, mediante el desarrollo de una metodología y estrategia capaz de administrar y gestionar todos los elementos que forman parte de este proceso (negociación de precios, financiamiento de las compras, control de inventario etc.).
                td(style="border: 3px solid #AFAFAF; padding: 2.5em") La gestión logística planifica, implementa y controla el flujo de almacenamiento desde su lugar de origen hasta el punto de consumo. En otras palabras, más sencillas, se encarga de organizar el proceso de envío y entrega física de las compras realizadas.

    p(data-aos="fade-right") En cuanto a la posición en la cadena de suministro, la labor del gestor de compras se incluye en la primera mitad de esta cadena de suministro, la otra mitad integra la funcionalidad y las tareas propias del área de logística. Cuando la empresa puede acceder y hacer las compras de productos y servicios efectuadas en tiempo y forma deseada, se habla de una correcta gestión de compras y logística.

</template>

<script>
export default {
  name: 'Tema2',
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
