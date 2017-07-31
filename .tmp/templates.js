angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/admin/admin.html","<section class=mainbar><section class=matter><div class=container><div class=row><div class=\"widget wviolet\"><div ht-widget-header title={{vm.title}}></div><div class=\"widget-content user\"><h3 translate=Admin_Unauthorized>Test</h3></div><div class=widget-foot><div class=clearfix></div></div></div><div class=col-md-12><div class=\"panel panel-info\"><div class=panel-heading><h3 translate=Admin_Unauthorized>Test</h3></div><div class=\"panel panel-body\"><table class=\"table-striped table-bordered table-hover table-condesend\"><thead><tr><th translate=USER_NAME></th><th translate=NAME></th><th translate=EMAIL></th><th translate=GENDER></th><th translate=DESIGNATION></th><th translate=ACTIONS></th></tr></thead><tbody><tr ng-repeat=\"user in vm.users\"><td>{{ user.username }}</td><td>{{ user.name }}</td><td>{{ user.email }}</td><td>{{ user.gender }}</td><td>{{ user.designation }}</td><td>{{ user.actions }}</td></tr></tbody></table></div></div></div></div></div></section></section>");
$templateCache.put("app/admin/login.html","<div class=container><div id=loginbox style=margin-top:50px; class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\"><div class=\"panel panel-info\"><div class=panel-heading><div class=panel-title>Sign In</div><div style=\"float:right; font-size: 80%; position: relative; top:-10px\"><a href=#>Forgot password?</a></div></div><div style=padding-top:30px class=panel-body><div style=display:none id=login-alert class=\"alert alert-danger col-sm-12\"></div><form id=loginform class=form-horizontal role=form><div style=\"margin-bottom: 25px\" class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-user\"></i></span> <input id=login-username type=text class=form-control name=username value placeholder=\"username or email\"></div><div style=\"margin-bottom: 25px\" class=input-group><span class=input-group-addon><i class=\"glyphicon glyphicon-lock\"></i></span> <input id=login-password type=password class=form-control name=password placeholder=password></div><div class=input-group><div class=checkbox><label><input id=login-remember type=checkbox name=remember value=1> Remember me</label></div></div><div style=margin-top:10px class=form-group><div class=\"col-sm-12 controls\"><a id=btn-login href=# class=\"btn btn-success\">Login</a></div></div><div class=form-group><div class=\"col-md-12 control\"><div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\">Don\'t have an account!</div></div></div></form></div></div></div></div>");
$templateCache.put("app/core/404.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class=\"fa fa-warning\"></i></div><div class=\"datas-text pull-right\"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=\"widget wblue\"><div ht-widget-header title=\"Page Not Found\" allow-collapse=true></div><div class=\"widget-content text-center text-info\"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>");
$templateCache.put("app/core/validation-messages.html","<p ng-message=required translate=REQUIRED_FIELD></p><p ng-message=minlength translate=MINLENGTH_FIELD></p><p ng-message=maxlength translate=MAXLENGTH_FIELD></p><p ng-message=email translate=EMAIL></p><p ng-message=pattern translate=PATTERN></p>");
$templateCache.put("app/dashboard/dashboard.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=blightblue><div class=pull-left><i class=\"fa fa-eyedropper fa-2x\"></i></div><div class=\"datas-text pull-right\"><span class=bold translate=Summary_Date>Testes - 19</span></div><div class=clearfix></div></li><li class=borange><div class=pull-left><i class=\"fa fa-envelope\"></i></div><div class=\"datas-text pull-right\"><span class=bold translate=Message_Count translate-values=\"{messageCount: vm.messageCount}\" translate-interpolation=messageformat>{{vm.messageCount}}</span></div><div class=clearfix></div></li></ul></div></div><div class=\"panel panel-primary\"><div class=panel-heading>Sumario de Testes</div><div class=\"panel panel-body\"><div class=row><div class=\"col-md-12 page-header\"><h1>Monthly</h1></div><div class=row><div class=\"col-md-4 col-md-offset-1\"><h2>Specimen Status</h2><canvas id=pie class=\"chart chart-pie\" chart-data=vm.data1 chart-labels=vm.labels1 chart-options=vm.options></canvas></div><div class=\"col-md-4 col-md-offset-1\"><h2>Test Status</h2><canvas id=pie class=\"chart chart-pie\" chart-data=vm.data2 chart-labels=vm.labels2 chart-options=vm.options></canvas></div></div></div><div class=row><div class=\"col-md-12 page-header\"><h1>Weekly</h1></div><div class=row><div class=\"col-md-4 col-md-offset-1\"><h2>Specimen Status</h2><canvas id=pie class=\"chart chart-pie\" chart-data=vm.data3 chart-labels=vm.labels3 chart-options=vm.options></canvas></div><div class=\"col-md-4 col-md-offset-1\"><h2>Test Status</h2><canvas id=pie class=\"chart chart-pie\" chart-data=vm.data4 chart-labels=vm.labels4 chart-options=vm.options></canvas></div></div></div></div></div></div></section></section>");
$templateCache.put("app/layout/ht-top-nav.html","<nav class=\"navbar navbar-fixed-top navbar-inverse\"><div class=navbar-header><a href=\"/\" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class=\"btn navbar-btn navbar-toggle\" ng-click=\"isCollapsed = !isCollapsed\"><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class=\"navbar-collapse collapse\" uib-collapse=isCollapsed><div class=\"pull-right navbar-logo\"><div class=\"dropdown nav navbar-nav pull-left\"><button id=dLabel type=button data-toggle=dropdown translate=Language><span class=caret></span></button><ul class=dropdown-menu role=menu><li><a ng-click=\"vm.changeLanguage(\'en\')\" translate>Languages.English</a></li><li><a ng-click=\"vm.changeLanguage(\'pt\')\" translate>Languages.Portuguese</a></li></ul></div><ul class=\"nav navbar-nav pull-right\"><li ng-show=vm.loggedIn><a target=_blank><span class=bold translate=Greeting translate-value-name=Technician>Admin is logged in</span></a></li><li><a ng-href={{vm.navline.link}} target=_blank translate=Created_By></a></li><li class=\"dropdown dropdown-big\"></li><li></li></ul></div></div></nav>");
$templateCache.put("app/layout/shell.html","<div ng-controller=\"ShellController as vm\"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ng-include=\"\'app/layout/sidebar.html\'\"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class=\"page-spinner-message overlay-message\">{{vm.busyMessage}}</div></div></section></div>");
$templateCache.put("app/layout/sidebar.html","<div ng-controller=\"SidebarController as vm\"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class=\"nlightblue fade-selection-animation\" ng-class=vm.isCurrent(r) ng-repeat=\"r in vm.navRoutes\"><a ui-sref={{r.name}}><i class={{r.settings.icon}}></i> {{ r.title | translate }}</a></li></ul></div></ht-sidebar></div>");
$templateCache.put("app/patients/patient-detail.html","q<section class=mainbar><section class=matter><div class=container><div><button class=\"btn btn-info btn-info-md\" ng-click=vm.goBack()><i class=\"fa fa-hand-o-left\" translate=GO_BACK></i></button> <button class=\"btn btn-info btn-form-md\" ng-click=vm.cancel() ng-disabled=vm.isUnchanged()><i class=\"fa fa-undo\" translate=CANCEL></i></button> <button ng-hide=vm.newPatient class=\"btn btn-info-form-md\" ng-click=vm.addPatient() ng-disabled=\"patientForm.$invalid || vm.isUnchanged()\"><i class=\"fa fa-save\" translate=SAVE></i></button> <button class=\"btn btn-info-form-md\" ng-click=vm.addPatient() ng-disabled=\"patientForm.$invalid || vm.isUnchanged()\"><i class=\"fa fa-user-plus\" translate=CREATE></i></button><span ng-hide=vm.isUnchanged() class=\"dissolve-animation ng-hide flag-haschanges\"><i class=\"fa fa-asterisk fa fa-asterisk-large\" rel=tooltip title=\"You have changes\"></i></span></div><div class=\"panel panel-primary\"><div class=panel-heading translate=PATIENT_DETAILS></div><div class=panel-body><form role=form name=patientForm class=form-horizontal ng-class=\"{\'has-error\': patientForm.$touched && patientForm.$invalid}\" novalidate><div title=\"Editar {{vm.getFullName() || \'Novo Paciente\' }}\"></div><div class=\"widget-content user\"></div><div class=col-sm-6><div class=form-group ng-class=\"{\'has-error\':patientForm.nid.$touched && patientForm.nid.$invalid}\"><label for=nid class=control-label translate=NID></label> <input name=nid class=form-control ng-model=vm.patient.nid placeholder=\"{{\'NID\' | translate }}\" required minlength=8><div class=help-block ng-messages=patientForm.nid.$error><div ng-messages-include=app/core/validation-messages.html></div></div></div><div class=form-group ng-class=\"{\'has-error\':patientForm.firstName.$touched && patientForm.firstName.$invalid}\"><label for class=control-label translate=NAME></label><div><input class=form-control ng-model=vm.patient.firstName name=firstName placeholder=\"{{\'NAME\'| translate }}\" required minlength=3><div class=help-block ng-messages=patientForm.firstName.$error><div ng-messages-include=app/core/validation-messages.html></div></div></div></div><div class=form-group ng-class=\"{\'has-error\':patientForm.lastName.$touched && patientForm.lastName.$invalid}\"><label for class=control-label translate=SURNAME></label><div><input class=form-control name=lastName ng-model=vm.patient.lastName placeholder=\"{{\'SURNAME\' | translate}}\" required minlength=3><div class=help-block ng-messages=patientForm.lastName.$error><div ng-messages-include=app/core/validation-messages.html></div></div></div></div><div class=form-group ng-class=\"{\'has-error\':patientForm.age.$touched && patientForm.age.$invalid}\"><label for class=control-label translate=AGE></label><div><input type=number class=form-control name=age ng-model=vm.patient.age placeholder=\"{{\'AGE\' | translate}}\" required minlength=1><div class=help-block ng-messages=patientForm.age.$error><div ng-messages-include=app/core/validation-messages.html></div></div></div></div><div class=form-group ng-class=\"{\'has-error\':patientForm.location.$touched && patientForm.location.$invalid}\"><label for class=control-label translate=ADDRESS></label><div><input class=form-control name=location ng-model=vm.patient.location placeholder=\"{{\'ADDRESS\' | translate}}\" required minlength=3><div class=help-block ng-messages=patientForm.location.$error><div ng-messages-include=app/core/validation-messages.html></div></div></div></div></div></form></div></div><div class=panel-footer></div></div></section></section>");
$templateCache.put("app/patients/patient.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=container-fluid></div></div></div></section></section>");
$templateCache.put("app/patients/patients.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=container-fluid><div class=row><div class=col-md-6><div class=form-group><form action class=search><input name=searchPatient class=\"form-control test-search\" type=text ng-model=vm.searchQuery placeholder=\"Digite o nome ou NID do paciente\"> <a class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-search\"></span> Procurar</a></form></div></div></div></div><div class=\"panel panel-primary\"><div class=panel-heading><span class=\"glyphicon glyphicon-user\"></span> Lista de Pacientes <button class=\"btn btn-default pull-right\" ng-click=vm.newPatient()><i class=\"fa fa-user-plus\"></i> Novo Paciente</button></div></div><div class=\"panel panel-body\"><table class=\"table table-stripped table-hover table-condensed\"><thead><tr><th translate>NID</th><th translate=Name>Nome</th><th>{{ \'Gender\' |translate }}</th><th>{{ \'Age\' | translate }}</th></tr><th>{{ \'Actions\' | translate }}</th></thead><tbody><tr ng-repeat=\"patient in vm.patients | filter:vm.searchQuery\"><td ng-show=vm.currentEdit[patient.nid]><input class=form-control ng-model=vm.itemToEdit.nid type=text></td><td ng-hide=vm.currentEdit[patient.nid]>{{patient.nid }}</td><td ng-show=vm.currentEdit[patient.nid]><input class=form-control ng-model=vm.itemToEdit.firstName type=text></td><td ng-hide=vm.currentEdit[patient.nid]>{{patient.firstName }}</td><td ng-show=vm.currentEdit[patient.nid]><input class=form-control ng-model=vm.itemToEdit.gender type=text></td><td ng-hide=vm.currentEdit[patient.nid]>{{patient.gender }}</td><td ng-show=vm.currentEdit[patient.nid]><input class=form-control ng-model=vm.itemToEdit.age type=text></td><td ng-hide=vm.currentEdit[patient.nid]>{{patient.age}}</td><td><button ng-hide=vm.currentEdit[patient.nid] class=\"btn btn-success\" ng-click=vm.edit(patient)><i class=\"fa fa-pencil\"></i> Editar</button> <button ng-hide=vm.currentEdit[patient.nid] class=\"btn btn-primary\" ng-click=vm.gotoPatient(patient.nid)><i class=\"fa fa-eye\"></i> Vizualizar</button> <button ng-show=vm.currentEdit[patient.nid] class=\"btn btn-info\" ng-click=vm.save()>Salvar</button> <button ng-show=vm.currentEdit[patient.nid] class=\"btn btn-danger\" ng-click=vm.cancel(patient.nid)>Cancelar</button></td></tr></tbody></table></div></div></div></section></section>");
$templateCache.put("app/tests/test.html","<section id=dasboard-view class=mainbar><section class=matter><div class=container></div></section></section><div><ol class=breadcrumb><li><a href=https://iblis-old.esaude.org/home>Home</a></li><li><a href=https://iblis-old.esaude.org/test>Tests</a></li><li class=active>New Test</li></ol></div><div class=\"panel panel-primary\"><div class=panel-heading><div class=container-fluid><div class=\"row less-gutter\"><div class=col-md-11><span class=\"glyphicon glyphicon-adjust\"></span>New Test</div><div class=col-md-1><a class=\"btn btn-sm btn-primary pull-right\" href=# onclick=\"window.history.back();return false;\" alt=\"Previous Page\" title=\"Previous Page\"><span class=\"glyphicon glyphicon-backward\"></span></a></div></div></div></div><div class=panel-body><form method=POST action=https://iblis-old.esaude.org/test/savenewtest accept-charset=UTF-8 id=form-new-test><input name=_token type=hidden value=xzNq9rRcMvkXKegvbVcwMZDpcMREdX7pLr5fthoB><div class=container-fluid><div class=row><div class=col-md-12><div class=\"panel panel-info\"><div class=panel-heading><h3 class=panel-title>Patient Details</h3></div><div class=\"panel-body inline-display-details\"><span><strong>Patient No.</strong> 10</span> <span><strong>Name</strong> Ana DOe</span> <span><strong>Age</strong> 1 years 3 months</span> <span><strong>Gender</strong> Female</span></div></div><div class=form-group><input name=patient_id type=hidden value=10> <label for=visit_type>Visit Type</label><select class=form-control id=visit_type name=visit_type><option value=\"\">--- Select visit type ---</option><option value=0>Out Patient</option><option value=1>In Patient</option></select></div><div class=form-group><label for=physician>Requesting Physician</label> <input class=form-control name=physician type=text id=physician></div><div class=form-group><label for=tests>Select Test(s)</label><div class=form-pane><table class=\"table table-striped table-hover table-condensed search-table\"><thead><tr><th>Tests</th><th>Actions</th></tr></thead><tbody><tr><td>BS for mps</td><td><label class=editor-active><input type=checkbox name=testtypes[] value=1></label></td></tr><tr><td>HB</td><td><label class=editor-active><input type=checkbox name=testtypes[] value=4></label></td></tr><tr><td>Pregnancy Test</td><td><label class=editor-active><input type=checkbox name=testtypes[] value=13></label></td></tr></tbody></table><div class=\"form-group actions-row\"><button class=\"btn btn-primary\" onclick=submit() alt=save_new_test type=button><span class=\"glyphicon glyphicon-save\"></span> Save Test Request</button></div></div></div></div></div></div></form></div></div>");
$templateCache.put("app/tests/tests.html","<section id=dasboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-6><div class=form-group><form action class=search><input type=text class=\"form-control test-search\" ng-model=vm.searchQuery placeholder=\"Digite o numero de requisicao ou NID do paciente\"> <a class=\"btn btn-primary\"><i class=\"fa fa-search-plus\"></i> Buscar</a></form></div></div><div class=col-md-12><div class=\"panel panel-success\"><div class=\"panel panel-heading\"><i class=\"fa fa-hospital-o fa-2x\"></i> Lista de Testes <button class=\"btn btn-success pull-right\" ng-click=vm.goToNewTest()><i class=\"fa fa-flask fa-plus fa-lg\"></i> {{ \'NEW_TEST\' | translate }}</button></div><div class=\"panel panel-body\"><table class=\"table table-stripped table-hover table-condensend\"><thead><tr><th translate=Requisition_ID></th><th>{{ \'Requisition_ID\' | translate}}</th><th>{{\'NID\'}}</th><th translate=Age></th><th translate=Gender></th><th translate>Tipo de Visita</th><th collspan=4>Testes</th></tr></thead><tbody><tr ng-repeat=\"test in vm.tests\"><td>{{ test.date }}</td><td>{{ test.requisition }}</td><td>{{ test.nid }}</td><td>{{ test.age }}</td><td>{{ test.gender }}</td><td>{{ test.visit }}</td><td ng-repeat=\"type in test.testsorders|filter: vm.searchQuery\"><button class=\"btn btn-{{type.btn}}\" uib-popover=\"Test Info\" popover-title=Detalhes popover-placement=bottom>{{ type.display }}</button></td></tr></tbody></table></div></div></div></div></div></section></section>");
$templateCache.put("app/widgets/widget-header.html","<div class=widget-head ng-class=\"{\'collapsive\': allowCollapse === \'true\'}\" ng-click=toggleContent()><div class=\"page-title pull-left\" translate>{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\"></div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");
$templateCache.put("app/widgets/widget-heading.html","<div class=\"panel panel-info\" ng-class=\"{\'collapsive\': allowCollapse === \'true\'}\" ng-click=toggleContent()><div class=\"panel-heading pull-left\">{{title}}</div><div class=panel-body></div><div class=clearfix></div></div>");}]);