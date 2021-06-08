'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">theme-master documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2e090ae0ab6e985ad4dbc242f34551da"' : 'data-target="#xs-components-links-module-AppModule-2e090ae0ab6e985ad4dbc242f34551da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2e090ae0ab6e985ad4dbc242f34551da"' :
                                            'id="xs-components-links-module-AppModule-2e090ae0ab6e985ad4dbc242f34551da"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppRoutingModule-e2ba8b5b7e29af795a66ef3e8929cd37"' : 'data-target="#xs-injectables-links-module-AppRoutingModule-e2ba8b5b7e29af795a66ef3e8929cd37"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppRoutingModule-e2ba8b5b7e29af795a66ef3e8929cd37"' :
                                        'id="xs-injectables-links-module-AppRoutingModule-e2ba8b5b7e29af795a66ef3e8929cd37"' }>
                                        <li class="link">
                                            <a href="injectables/InterceptorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InterceptorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' : 'data-target="#xs-components-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' :
                                            'id="xs-components-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' : 'data-target="#xs-injectables-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' :
                                        'id="xs-injectables-links-module-AuthModule-fbda331d2dfe1c9e539e22838f0723de"' }>
                                        <li class="link">
                                            <a href="injectables/SignupService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SignupService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthRoutingModule-977641b539443978b9ebbad06488d572"' : 'data-target="#xs-injectables-links-module-AuthRoutingModule-977641b539443978b9ebbad06488d572"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthRoutingModule-977641b539443978b9ebbad06488d572"' :
                                        'id="xs-injectables-links-module-AuthRoutingModule-977641b539443978b9ebbad06488d572"' }>
                                        <li class="link">
                                            <a href="injectables/InterceptorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InterceptorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-7144e4829b2e4a562b3667904d04bbcd"' : 'data-target="#xs-components-links-module-DashboardModule-7144e4829b2e4a562b3667904d04bbcd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-7144e4829b2e4a562b3667904d04bbcd"' :
                                            'id="xs-components-links-module-DashboardModule-7144e4829b2e4a562b3667904d04bbcd"' }>
                                            <li class="link">
                                                <a href="components/BoxDialogEditListUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxDialogEditListUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoxDialogEditTypeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxDialogEditTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoxDialogExcludeListUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxDialogExcludeListUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BoxSialogDeleteTypesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BoxSialogDeleteTypesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListTypesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListTypesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListUsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRouterModule.html" data-type="entity-link">DashboardRouterModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DashboardRouterModule-49eb122f4d71ca43f7f55829b1733d46"' : 'data-target="#xs-injectables-links-module-DashboardRouterModule-49eb122f4d71ca43f7f55829b1733d46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DashboardRouterModule-49eb122f4d71ca43f7f55829b1733d46"' :
                                        'id="xs-injectables-links-module-DashboardRouterModule-49eb122f4d71ca43f7f55829b1733d46"' }>
                                        <li class="link">
                                            <a href="injectables/InterceptorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InterceptorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoaderService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoaderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MockModule.html" data-type="entity-link">MockModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MockModule-9760bca1d999d9dcb6af29ae3628ae71"' : 'data-target="#xs-injectables-links-module-MockModule-9760bca1d999d9dcb6af29ae3628ae71"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MockModule-9760bca1d999d9dcb6af29ae3628ae71"' :
                                        'id="xs-injectables-links-module-MockModule-9760bca1d999d9dcb6af29ae3628ae71"' }>
                                        <li class="link">
                                            <a href="injectables/InterceptorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InterceptorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ThemeModule.html" data-type="entity-link">ThemeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' : 'data-target="#xs-components-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' :
                                            'id="xs-components-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' }>
                                            <li class="link">
                                                <a href="components/DashboardLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderVisitorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderVisitorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuLateralComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuLateralComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisitorLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisitorLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' : 'data-target="#xs-directives-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' :
                                        'id="xs-directives-links-module-ThemeModule-8f8202f306a9e811c7c823663fd5d0a3"' }>
                                        <li class="link">
                                            <a href="directives/PhoneDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PhoneDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisitorModule.html" data-type="entity-link">VisitorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VisitorModule-090c0e95af13c0d3f225d0d1e910d579"' : 'data-target="#xs-components-links-module-VisitorModule-090c0e95af13c0d3f225d0d1e910d579"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VisitorModule-090c0e95af13c0d3f225d0d1e910d579"' :
                                            'id="xs-components-links-module-VisitorModule-090c0e95af13c0d3f225d0d1e910d579"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisitorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisitorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VisitorRoutingModule.html" data-type="entity-link">VisitorRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/userIndexed.html" data-type="entity-link">userIndexed</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLocalData.html" data-type="entity-link">UserLocalData</a>
                            </li>
                            <li class="link">
                                <a href="classes/userResultApi.html" data-type="entity-link">userResultApi</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/InterceptorService.html" data-type="entity-link">InterceptorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link">LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInService.html" data-type="entity-link">SignInService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignupService.html" data-type="entity-link">SignupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link">ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDbService.html" data-type="entity-link">UserDbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/LogedGuard.html" data-type="entity-link">LogedGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-1.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-2.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/itemMenu.html" data-type="entity-link">itemMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/itemMenu-1.html" data-type="entity-link">itemMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/menu.html" data-type="entity-link">menu</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});