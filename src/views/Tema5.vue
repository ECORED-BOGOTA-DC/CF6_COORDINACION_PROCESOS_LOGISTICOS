<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Promesa de servicio
    
    p(data-aos="fade-right") El servicio al cliente y la logística están íntimamente conectados. Por un lado, puede aprender sobre el servicio al cliente como medidas para proporcionar un producto o servicio específico; del mismo modo, si está hablando de logística, se referirá cada una de estas acciones para proporcionar el producto o servicio al cliente en las condiciones requeridas. 
    p.mb-5(data-aos="fade-right") El servicio al cliente y la logística, incluida una oferta de negocios, es tan importante como el producto en sí mismo o el servicio en sí. Recuerde que es inutilizable tener un producto excelente si no llega al cliente en las mejores condiciones (especialmente en relación con el lugar, el informe solicitado de tiempo y las condiciones óptimas). Por lo tanto, el servicio al cliente y la logística de comandos son un aspecto que es tan importante como el producto o el servicio en sí, porque es el que permite que la distribución se realice correcta y satisfactoriamente.

    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 Concepto
    
    p(data-aos="fade-right") La promesa de servicio al cliente se ha denominado como un proceso de satisfacción total, el cual puede describirse simplemente como “el proceso integral de cumplir con el pedido de un cliente”. Está inmersa la logística cuando se efectúa una compra y entra en juego la necesidad comercial.
    p.mb-5(data-aos="fade-right") Por lo anterior, al hablar de la promesa de servicio al cliente y logística se suelen distinguir las siguientes fases:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG01" data-aos="fade-right")
      div(titulo="Aprovisionamiento y gestión de inventario")
        p.mb-0 En esta fase es donde la empresa logística es responsable de recibir las acciones necesarias para cumplir la demanda de solicitud de pedidos realizados.  Es decir, es estable siempre que pueda poner las necesidades de los clientes primero. Esto significa que, además de la oferta de inventario, la compañía debe conocer de manera específica la posición exacta de cada producto.
      div(titulo="Almacenamiento")
        p.mb-0 Tan pronto como se haya realizado el suministro de productos e inventarios, se genera la oferta, que está garantizada hasta que salga al público con cantidades exactas.
      div(titulo="Ejecución de la compra")
        p.mb-0 Es la fase en la que se ha producido el contrato comercial con el cliente, es ahí en donde se define de quién es la responsabilidad del transporte y de los envíos, la mayoría de veces depende de la empresa a pesar de que el cliente pague por el producto pero se puede tener clientes que vayan a la tienda y saquen su producto, desde ese momento la responsabilidad es compartida con más peso en el cliente.
      div(titulo="Transporte")
        p.mb-0 Esta es la fase que incluye toda la promesa de servicio al cliente y logística, ya que el producto sale de almacenes hasta que llegan a los clientes finales. En este momento, es importante que el producto esté en cualquier momento y que la trazabilidad del momento pueda crecer constantemente desde el momento en que proviene del campamento hasta que llegue a las manos del cliente. Además, esta fase es esencial para una distribución lógica de los paquetes, que se lleva a cabo de la manera más efectiva posible de las posibles rutas de distribución de las mercancías.
      div(titulo="Recepción y servicio posventa")
        p.mb-0 En esta última fase, el producto finalmente llegó a las manos del cliente y se considera llenado por el proceso de logística. Sin embargo, se debe recordar que el cliente generalmente tiene la oportunidad de devolverla o cambiarla después de la entrega favorable del producto.  En este caso, el servicio posventa se incluiría en la continuación de la última fase logística.

    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Niveles de servicio
    
    p(data-aos="fade-right") En la cadena de suministro, el nivel de ciclo de servicio es la probabilidad esperada que no alcance una situación de falla durante el próximo ciclo del tanque, por lo que es la probabilidad de no perder ventas que la compañía pueda participar en un tiempo. La duración del ciclo es implícitamente el tiempo de entrega y representa el grado de satisfacción del cliente. 
    p(data-aos="fade-right") Un alto nivel de operación incluye un gran esfuerzo logístico en todos los enlaces de la cadena. La optimización del nivel de servicio es esencial para que el nivel definido se respeta sin exceder los costos de inventario. Como resultado, el nivel de servicio de compensación se presenta entre los costos de inventario y los costos debido a la falta de acciones. 
    p.mb-5(data-aos="fade-right") Desde el punto de vista del método de análisis ABC basado en la idea de que la ganancia genera un producto, este debe ser más importante y es esencial que este producto sea tanto para el minorista como para sus clientes. Esta hipótesis generalmente genera resultados razonables, aunque existen excepciones significativas y proporciona una forma conveniente de clasificar los productos en función de su respectivo volumen de ventas. Cada categoría se le asigna su nivel de servicio.

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Una partición ABC típica sería como la siguiente:

    <br><br>
    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          .BGR03C.hg-01.px-4
            .BGR06.img-01.p-3
              .h4.text-center.mb-0 Artículos A
            p En cantidad, suelen ocupar #[strong el 20% de los inventarios], pero son los que más rotación experimentan y, por tanto, tienen una importancia estratégica. Las referencias A son los productos en los que la empresa tiene invertido más presupuesto y generan el 80% de los ingresos, por lo que es prioritario evitar las roturas de stock.
            p Los productos de mayor importancia, categoría A, deberían estar asociados a un mayor nivel de servicio.
        .col-12.d-lg-none.d-flex
          <br><br>
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
          .BGR03F.hg-01.px-4
            .BGR07.img-01.p-3
              .h4.text-center.mb-0 Artículos B
            p.mb-0 Comprenden la #[strong franja de rotación media y suelen representar, en cantidad, el 30% de los inventarios]. Estos artículos se renuevan con menos velocidad, por lo que su valor y relevancia es menor frente a los productos A.
        .col-12.d-lg-none.d-flex
          <br><br>
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
          .BGR03C.hg-01.px-4
            .BGR06.img-01.p-3
              .h4.text-center.mb-0 Artículos C
            p.mb-0 #[strong Son los más numerosos, llegando a suponer el 50% de las referencias almacenadas]. Sin embargo, también son los menos demandados por parte de los clientes.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img01.svg' alt="Gráfico que hace relación de los Artículos A B C, tanto en Consumo como en Referencias, con escalas que van desde 0 a 100.")
    

</template>

<script>
export default {
  name: 'Tema5',
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
