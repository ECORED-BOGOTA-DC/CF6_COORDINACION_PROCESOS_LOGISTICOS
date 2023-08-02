export default {
  global: {
    componenteFormativo: 'Elaborar el plan de compras',
    descripcionCurso:
      'Las compras son una actividad fundamental de las empresas, con ellas se puede gestionar productos y sus constantes cambios; este proceso de ventas es primordial para la producción como para la comercialización. Los coordinadores logísticos son los encargados de planear la logística en donde se entiendan las necesidades de todos los departamentos de la empresa sin sobresaltos previniendo sobrecostos y tiempos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Compras conceptos generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistemas Integral de Compras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Políticas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Función de las compras en los procesos logísticos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Selección de proveedores',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Negociación con proveedores',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Alianzas estratégicas',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de compras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Funciones de la gestión de compras',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Gestión de proveedores',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Acuerdos y alianzas comerciales con proveedores',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Costos de comprar',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Gestión de compras y su relación con otros procesos logísticos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestionar las compras según requerimientos de la entidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estrategia de compras',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Generación del pedido - requerimiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Adquisición de la orden',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Elaboración del plan de compras',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Stock de inventarios de materia prima y suministros',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Reabastecimiento',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Relacionamiento con proveedores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Promesa de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Niveles de servicio',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Evaluación de la gestión de compras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Certificación y evaluación de proveedores',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Concepto de benchmarking',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Herramientas para evaluar proveedores',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Indicadores de gestión aplicados a la evaluación del proceso logístico de abastecimiento',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
  ],
  glosario: [
    {
      termino: 'Acopio',
      significado:
        'acto de acumular algo, por lo general provisiones o víveres.',
    },
    {
      termino: 'Almacén',
      significado:
        'al local, espacio o lugar físico que está destinado para alojar mercancías o en el cual se venden productos al por mayor se lo designa almacén.',
    },
    {
      termino: 'Aprovisionamiento',
      significado:
        'el conjunto de actividades que desarrollan las empresas para asegurar la disponibilidad de los bienes y servicios externos que le son necesarios para la realización de sus actividades.',
    },
    {
      termino: 'Área de compras',
      significado:
        'el departamento de compras es el encargado de realizar las adquisiciones necesarias en el momento debido, con la cantidad y calidad requerida y a un precio adecuado.',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'es una herramienta estratégica usada para analizar las actividades de una empresa y así identificar sus fuentes de ventaja competitiva. A partir de una breve revisión bibliográfica se ampliará el concepto y su utilidad.',
    },
    {
      termino: 'Precio de adquisición',
      significado:
        'es el precio que se encuentra en la factura del proveedor más todo lo que se suma para hacer que el producto llegue a destino, en este precio va incluido el costo de los impuestos, transportes y seguros; entre otros.',
    },
    {
      termino: 'Preparación de pedidos',
      significado:
        'conjunto de operaciones que permiten sacar del almacén todos los artículos que forman un pedido y, eventualmente, reagruparlos antes del envío.',
    },
    {
      termino: 'Proveedor',
      significado:
        'es una entidad de diverso orden que presta servicios a otras.',
    },
    {
      termino: 'Remisión',
      significado:
        'es un documento utilizado para registrar la entrega y recepción de un pedido específico en una transacción o compra. Se emite cuando una de las partes entrega los productos o artículos a la otra. Por lo general, incluye una lista de los bienes entregados, con copias duplicadas para ambas partes, a fin de verificar la compra. La remisión se completa en el momento de la entrega, marcando el final de la transacción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariño, A. (2007). Alianzas estratégicas: opciones para el crecimiento de la empresa (I). Estrategia Financiera, 236, 40 - 51.',
    },
    {
      referencia:
        'Consultora QuestionPro. (2020). <em>¿Qué es una evaluación de proveedores?</em>',
      link: 'https://www.questionpro.com/blog/es/evaluacion-de-proveedores/',
    },
    {
      referencia: 'Espinosa, R. (2021). <em>Tipos de benchmarking.</em>',
      link:
        'https://robertoespinosa.es/2017/05/13/benchmarking-que-es-tipos-ejemplos ',
    },
    {
      referencia:
        'García A., J. L.; Romero G., J.; Canales V., I. (2010). Selección de proveedores usando el método MOORA. <em>CULCyT: Cultura Científica y Tecnológica</em>, 7, 40-41, 94-105.',
    },
    {
      referencia:
        'ICONTEC. (2000). <em>Sistemas de gestión de la calidad.</em>',
    },
    {
      referencia:
        'Kottler, P.; Keller, K. (2016). <em>Dirección de Marketing. Pearson.</em>',
    },
    {
      referencia:
        'Mercado, H. S. (2018). <em>Compras. Principios y aplicaciones. Limusa (Noriega Editores).</em>',
    },
    {
      referencia:
        'Montoya, P. A. (2010). <em>Administración de compras: quien compra bien, vende bien</em>. Ecoe Ediciones.',
    },
    {
      referencia:
        'Publishing, M. (2007). <em>Compras e inventarios</em>. Ediciones Díaz de Santos<.',
    },
    {
      referencia:
        'Sangri C., A. (2016). <em>Administración de compras: adquisiciones y abastecimiento</em>. Grupo Editorial Patria.',
    },
    {
      referencia: 'Soriano, C. (1995). <em>Compras inventarios</em>.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/52926?page=74',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Rodríguez Cuéllar',
          cargo: 'Instructor, Experto temático',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure ',
          cargo: 'Diseñador Web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
