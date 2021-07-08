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
                    <a href="index.html" data-type="index-link">usuarios-api documentation</a>
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
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link">ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' : 'data-target="#xs-controllers-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' :
                                            'id="xs-controllers-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' }>
                                            <li class="link">
                                                <a href="controllers/ChatController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' : 'data-target="#xs-injectables-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' :
                                        'id="xs-injectables-links-module-ChatModule-ca437d80043f9ebcbddeb2073a7ee7eb"' }>
                                        <li class="link">
                                            <a href="injectables/ChatService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ChatService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessagesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-37438133280d30d66144310ee54af48b"' : 'data-target="#xs-injectables-links-module-CoreModule-37438133280d30d66144310ee54af48b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-37438133280d30d66144310ee54af48b"' :
                                        'id="xs-injectables-links-module-CoreModule-37438133280d30d66144310ee54af48b"' }>
                                        <li class="link">
                                            <a href="injectables/GeradorUuidService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GeradorUuidService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link">ProductsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' : 'data-target="#xs-controllers-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' :
                                            'id="xs-controllers-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TokenController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TokenController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UserTypeController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserTypeController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' : 'data-target="#xs-injectables-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' :
                                        'id="xs-injectables-links-module-UsersModule-f07749804da84f577bc79192415a7b4d"' }>
                                        <li class="link">
                                            <a href="injectables/GeradorUuidService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GeradorUuidService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ChatController.html" data-type="entity-link">ChatController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link">LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TokenController.html" data-type="entity-link">TokenController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link">UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserTypeController.html" data-type="entity-link">UserTypeController</a>
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
                                <a href="classes/AdressUser.html" data-type="entity-link">AdressUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/Chat.html" data-type="entity-link">Chat</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatGateway.html" data-type="entity-link">ChatGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/imagesProduct.html" data-type="entity-link">imagesProduct</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessagesChat.html" data-type="entity-link">MessagesChat</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link">Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeUser.html" data-type="entity-link">TypeUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/user.html" data-type="entity-link">user</a>
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
                                    <a href="injectables/ChatService.html" data-type="entity-link">ChatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigInit.html" data-type="entity-link">ConfigInit</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeradorUuidService.html" data-type="entity-link">GeradorUuidService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link">LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link">MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link">TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserTypeService.html" data-type="entity-link">UserTypeService</a>
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
                                <a href="guards/RoleWsGuard.html" data-type="entity-link">RoleWsGuard</a>
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
                                <a href="interfaces/file.html" data-type="entity-link">file</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ichat.html" data-type="entity-link">Ichat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/login.html" data-type="entity-link">login</a>
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