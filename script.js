var app = angular.module("app", []);
app.controller("ctrl", function ($scope) {
    $scope.projects = projects;
    $scope.projectsfrontback = projectsfrontback;
});

var projects = [
    {
        title: 'admin-starter-springboot-sec',
        technologies: [
            'springboot',
            'jsf',
            'spring security',
            'primefaces',
            'jpa',
            'hibernate envers',
            'joinfaces framework',
            'heroku postgres'
        ],
        deploy: 'https://admin-starter-springboot-sec.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/admin-starter-springboot-springsecurity'
    },
    {
        title: 'angularjs-basic-page',
        technologies: [
            'angularjs'
        ],
        deploy: 'https://angularjs-basic-page.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/basic-angularjs-page'
    },
    {
        title: 'angularjs-springboot-upload-fi',
        technologies: [
            'springboot',
            'angularjs',
            'jpa',
            'rest',
            'fileupload',
            'h2'
        ],
        deploy: 'https://angularjs-springboot-upload-fi.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/angularjs-springboot-upload-file'
    },
    {
        title: 'clientrestservice',
        technologies: [
            'rest',
            'jpa',
            'heroku-postgresql'
        ],
        deploy: 'https://clientrestservice.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/client-rest-service'
    },
    {
        title: 'consumerestjava',
        technologies: [
            'consumes rest api = cliente-rest-api',
            'gson',
            'jsf',
            'primefaces'
        ],
        deploy: 'https://consumerestjava.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/consumerestjava'
    },
    {
        title: 'gs-uploading-files',
        technologies: [
            'springboot',
            'spring mvc',
            'fileupload',
            'save file local'
        ],
        deploy: 'https://gs-uploading-files.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/gs-uploading-files'
    },
    {
        title: 'joinfaces-project',
        technologies: [
            'jsf',
            'springboot',
            'heroku postgresql',
            'primefaces',
            'heroku postgres'
        ],
        deploy: 'https://joinfaces-project.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/joinfaces-project'
    },
    {
        title: 'jsfspringhsqldb',
        technologies: [
            'jsf',
            'hsqldb'
        ],
        deploy: 'https://jsfspringhsqldb.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/jsfspringhsqldb'
    },
    {
        title: 'jsf-pf-spring-sec-pf-interface',
        technologies: [
            'jsf',
            'spring mvc',
            'primefaces',
            'heroku postgresql',
            'spring security',
            'heroku postgres'
        ],
        deploy: 'https://jsf-pf-spring-sec-pf-interface.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/JSF_Primefaces_Spring_Security_Primefaces_Interface'
    },
    {
        title: 'jsf-pf-spring-security-no-db',
        technologies: [
            'jsf',
            'primefaces',
            'spring security',
            'spring mvc',
            'h2'
        ],
        deploy: 'https://jsf-pf-spring-security-no-db.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/jsf-primefaces-spring'
    },
    {
        title: 'jsf-primefaces-spring-security',
        technologies: [
            'jsf',
            'primefaces',
            'spring security',
            'heroku postgres'
        ],
        deploy: 'https://jsf-primefaces-spring-security.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/JSF_Primefaces_Spring_Security'
    },
    {
        title: 'jsfspringcustomviewscope',
        technologies: [
            'jsf',
            'jpa',
            'spring mvc',
            'hsqldb'
        ],
        deploy: 'https://jsfspringcustomviewscope.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/jsfspringcustomviewscope'
    },
    {
        title: 'springboot-fileupload',
        technologies: [
            'springboot',
            'jpa',
            'angular js',
            'file upload',
            'h2'
        ],
        deploy: 'https://springboot-fileupload.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/springboot-fileupload'
    },
    {
        title: 'spring-login-tutorial',
        technologies: [
            'springboot',
            'spring security',
            'jpa',
            'lombok',
            'thymeleaf',
            'bootstrap',
            'heroku postgres'
        ],
        deploy: 'https://spring-login-tutorial.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/spring-login'
    },
    {
        title: 'springboot-adminlte',
        technologies: [
            'springboot',
            'jpa',
            'spring security',
            'thymeleaf',
            'lombok',
            'heroku postgres'
        ],
        deploy: 'https://springboot-adminlte.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/springboot-adminlte'
    },
    {
        title: 'react-imdb-movie-app',
        technologies: [
            'react',
            'primfaces sigma template (admin)',
            'omdbapi'
        ],
        deploy: 'https://react-imdb-movie-app.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/react-imdb-movie-app'
    },
    {
        title: 'react-rest-reqres',
        technologies: [
            'react',
            'rest',
            'reqres site'
        ],
        deploy: 'https://react-rest-reqres.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/react-rest-reqres'
    },
    {
        title: 'spring-boot-angularjs-no-db',
        technologies: [
            'springboot',
            'angularjs',
            'crud',
            'h2'
        ],
        deploy: 'https://spring-boot-angularjs-no-db.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/spring-boot-angularjs-crud-app'
    },
    {
        title: 'spring-boot-thymeleaf-project',
        technologies: [
            'springboot',
            'thymeleaf',
            'jpa',
            'crud',
            'dto',
            'h2'
        ],
        deploy: 'https://spring-boot-thymeleaf-project.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/spring-boot-thymeleaf'
    },
    {
        title: 'lagnoid',
        technologies: [
            'unity'
        ],
        deploy: 'https://lagnoid.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/lagnoid'
    },
    {
        title: 'sds3-tony',
        technologies: [
            'frontend: react (https://tony-dsvendas.netlify.app)',
            'backend: springboot (https://sds3-tony.herokuapp.com/)'
        ],
        deploy: 'https://tony-dsvendas.netlify.app',
        sourcecode: 'https://github.com/tonysobreira/projeto-sds3'
    },
    {
        title: 'curso-spring-ionic-back-end',
        technologies: [
            'springboot',
            'jwt',
            'spring security',
            'frontend: https://github.com/tonysobreira/curso-spring-ionic-frontend',
            'backend: https://github.com/tonysobreira/spring-boot-ionic-backend',
            'Curso Udemy SpringBoot REST JWT React',
            'repositórios extras do curso:',
            'https://github.com/tonysobreira/workshop-springboot2-mongodb',
            'https://github.com/tonysobreira/cursomc-arquivos',
            'https://github.com/tonysobreira/cursomc-temp-',
            'https://github.com/tonysobreira/aula-jpa',
            'https://github.com/tonysobreira/spring-boot-ionic-backend-temp-'
        ],
        deploy: '#',
        sourcecode: 'https://github.com/tonysobreira/spring-boot-ionic-backend'
    },
    {
        title: 'base-project-jsf-spring-pf',
        technologies: [
            'jsf',
            'primefaces',
            'heroku postgresql',
            'spring mvc',
            'jpa',
            '***** Atualizar Projeto'
        ],
        deploy: 'https://base-project-jsf-spring-pf.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/base-project-jsf-spring-primefaces-war'
    },
    {
        title: 'react-redux-hooks-jwt-auth',
        technologies: [
            'react',
            'redux',
            'hooks',
            'jwt',
            'auth',
            'back-end: https://springboot-securityjwt-backend.herokuapp.com/api/auth',
            '***** Não está rodando no Heroku'
        ],
        deploy: 'https://react-redux-hooks-jwt-auth.herokuapp.com/',
        sourcecode: 'https://github.com/tonysobreira/react-redux-hooks-jwt-auth'
    }
];

var project = {
    title: '',
    technologies: [
        ''
    ],
    deploy: '',
    sourcecode: ''
};

var projectsfrontback = [
    {
        titlefront: 'cliente-page',
        technologiesfront: [
            'angularjs',
            'angular material'
        ],
        deployfront: 'https://cliente-page.herokuapp.com/',
        sourcecodefront: 'https://github.com/tonysobreira/cliente',
        titleback: 'cliente-rest-api',
        technologiesback: [
            'springboot',
            'jpa',
            'rest',
            'h2'
        ],
        deployback: 'https://cliente-rest-api.herokuapp.com/',
        sourcecodeback: 'https://github.com/tonysobreira/cliente-rest-api'
    },
    {
        titlefront: 'javaguides-react-frontend',
        technologiesfront: [
            'react'
        ],
        deployfront: 'https://javaguides-react-frontend.herokuapp.com/',
        sourcecodefront: 'https://github.com/tonysobreira/javaguides-react-frontend',
        titleback: 'javaguides-springboot-backend',
        technologiesback: [
            'springboot',
            'jpa',
            'h2'
        ],
        deployback: 'https://javaguides-springboot-backend.herokuapp.com/',
        sourcecodeback: 'https://github.com/tonysobreira/javaguides-springboot-backend'
    },
    {
        titlefront: 'springboot-securityjwt-front',
        technologiesfront: [
            'react',
            'rest',
            'jwt'
        ],
        deployfront: 'https://springboot-security-jwt-front.herokuapp.com/',
        sourcecodefront: 'https://github.com/tonysobreira/springboot-security-jwt-front',
        titleback: 'springboot-securityjwt-backend',
        technologiesback: [
            'springboot',
            'spring security',
            'jwt',
            'userDetails',
            'heroku postgres'
        ],
        deployback: 'https://springboot-securityjwt-backend.herokuapp.com/',
        sourcecodeback: 'https://github.com/tonysobreira/spring-boot-security-jwt-backend'
    },
    {
        titlefront: 'spring-boot-react-jwt-frontend',
        technologiesfront: [
            'react',
            'jwt'
        ],
        deployfront: 'https://spring-boot-react-jwt-frontend.herokuapp.com/',
        sourcecodefront: 'https://github.com/tonysobreira/spring-boot-react-jwt-auth-login-logout-frontend',
        titleback: 'spring-boot-react-jwt-backend',
        technologiesback: [
            'springboot',
            'spring security'
        ],
        deployback: 'https://spring-boot-react-jwt-backend.herokuapp.com/',
        sourcecodeback: 'https://github.com/tonysobreira/spring-boot-react-jwt-auth-login-logout-backend'
    },
    {
        titlefront: 'springboot-security-jwt-front',
        technologiesfront: [
            'react',
            'jwt',
            'primefaces sigma (admin)'
        ],
        deployfront: 'https://springboot-security-jwt-front.herokuapp.com/',
        sourcecodefront: 'https://github.com/tonysobreira/springboot-security-jwt-front',
        titleback: 'springboot-security-jwt-back',
        technologiesback: [
            'springboot',
            'spring security',
            'jwt',
            'userDetails',
            'test,dev,prod profiles',
            'send email',
            'heroku postgresql'
        ],
        deployback: 'https://springboot-security-jwt-back.herokuapp.com/',
        sourcecodeback: 'https://github.com/tonysobreira/springboot-security-jwt-backend'
    }
];

var projectfrontback = {
    titlefront: '',
    technologiesfront: [
        ''
    ],
    deployfront: '',
    sourcecodefront: '',
    titleback: '',
    technologiesback: [
        ''
    ],
    deployback: '',
    sourcecodeback: ''
};