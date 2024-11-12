import { ref, resolveComponent, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext, toDisplayString, defineComponent } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import pkg from "file-saver";
import { _ as _export_sfc, f as useDisplay } from "../server.mjs";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
const link = [
  {
    title: "GitHub",
    link: "https://github.com/victorpessoa01",
    icon: "mdi-github"
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/victor-pessoa-b93703241/",
    icon: "mdi-linkedin"
  },
  {
    title: "Mail",
    link: "mailto:victorpessoa0011@gmail.com",
    icon: "mdi-email"
  }
];
const lang = [
  {
    name: "HTML",
    icon: "mdi-language-html5",
    color: "#e34f26",
    star: 3
  },
  {
    name: "CSS",
    icon: "mdi-language-css3",
    color: "#1572b6",
    star: 2
  },
  {
    name: "Vue JS",
    icon: "mdi-vuejs",
    color: "#4fc08d",
    star: 2
  },
  {
    name: "Typescript",
    icon: "mdi-language-typescript",
    color: "#007acc",
    star: 1
  }
];
const _sfc_main$4 = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { saveAs } = pkg;
    const resume = ref("/curriculo.pdf");
    function downloadResume() {
      saveAs(resume.value, "curriculo-José_Victor_Pessoa.pdf");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        id: "home",
        class: "container"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "ma-0 pa-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="ma-0 pa-0 mb-n2" style="${ssrRenderStyle({ "font-size": "2rem", "font-weight": "600" })}" data-v-63e7c8c8${_scopeId2}>Desenvolvedor</h1>`);
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-flex align-center ma-0 pa-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h1 class="spacing text-secondary mr-7 ma-0 pa-0" style="${ssrRenderStyle({ "font-size": "1.9rem", "font-weight": "600" })}" data-v-63e7c8c8${_scopeId3}>FRONT</h1><h1 class="spacing text-primary ma-0 pa-0 mr-0" style="${ssrRenderStyle({ "font-size": "1.9rem", "font-weight": "600" })}" data-v-63e7c8c8${_scopeId3}>END</h1>`);
                      } else {
                        return [
                          createVNode("h1", {
                            class: "spacing text-secondary mr-7 ma-0 pa-0",
                            style: { "font-size": "1.9rem", "font-weight": "600" }
                          }, "FRONT"),
                          createVNode("h1", {
                            class: "spacing text-primary ma-0 pa-0 mr-0",
                            style: { "font-size": "1.9rem", "font-weight": "600" }
                          }, "END")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, { class: "d-flex align-center ma-0 pa-0 mt-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(link), (i) => {
                          _push4(ssrRenderComponent(_component_v_card, {
                            key: i.title,
                            href: i.link,
                            target: "_blank",
                            class: "btn ma-0 pa-0 mr-6",
                            color: "primary"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, {
                                  color: "secondary",
                                  icon: i.icon,
                                  size: "30",
                                  class: "ma-1 pa-0"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_icon, {
                                    color: "secondary",
                                    icon: i.icon,
                                    size: "30",
                                    class: "ma-1 pa-0"
                                  }, null, 8, ["icon"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(link), (i) => {
                            return openBlock(), createBlock(_component_v_card, {
                              key: i.title,
                              href: i.link,
                              target: "_blank",
                              class: "btn ma-0 pa-0 mr-6",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  color: "secondary",
                                  icon: i.icon,
                                  size: "30",
                                  class: "ma-1 pa-0"
                                }, null, 8, ["icon"])
                              ]),
                              _: 2
                            }, 1032, ["href"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h1", {
                      class: "ma-0 pa-0 mb-n2",
                      style: { "font-size": "2rem", "font-weight": "600" }
                    }, "Desenvolvedor"),
                    createVNode(_component_v_row, { class: "d-flex align-center ma-0 pa-0" }, {
                      default: withCtx(() => [
                        createVNode("h1", {
                          class: "spacing text-secondary mr-7 ma-0 pa-0",
                          style: { "font-size": "1.9rem", "font-weight": "600" }
                        }, "FRONT"),
                        createVNode("h1", {
                          class: "spacing text-primary ma-0 pa-0 mr-0",
                          style: { "font-size": "1.9rem", "font-weight": "600" }
                        }, "END")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { class: "d-flex align-center ma-0 pa-0 mt-6" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(link), (i) => {
                          return openBlock(), createBlock(_component_v_card, {
                            key: i.title,
                            href: i.link,
                            target: "_blank",
                            class: "btn ma-0 pa-0 mr-6",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                color: "secondary",
                                icon: i.icon,
                                size: "30",
                                class: "ma-1 pa-0"
                              }, null, 8, ["icon"])
                            ]),
                            _: 2
                          }, 1032, ["href"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-63e7c8c8${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "ma-0 pa-0 mt-10 text-right"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, {
                    justify: "end",
                    class: "ma-0 pa-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="ma-0 pa-0 text-textSecondary" style="${ssrRenderStyle({ "font-size": "1rem", "font-weight": "600" })}" data-v-63e7c8c8${_scopeId3}> Escreval (&quot;<span class="ma-0 pa-0 text-primary" style="${ssrRenderStyle({ "font-size": "1.5rem" })}" data-v-63e7c8c8${_scopeId3}>Olá, Mundo!!!</span>&quot;) </span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: "ma-0 pa-0 text-textSecondary",
                            style: { "font-size": "1rem", "font-weight": "600" }
                          }, [
                            createTextVNode(' Escreval ("'),
                            createVNode("span", {
                              class: "ma-0 pa-0 text-primary",
                              style: { "font-size": "1.5rem" }
                            }, "Olá, Mundo!!!"),
                            createTextVNode('") ')
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_row, {
                    justify: "end",
                    class: "ma-0 pa-0 mt-6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          class: "btn d-flex pa-0 ma-0 rounded-xl",
                          elevation: "3",
                          onClick: downloadResume,
                          color: "secondary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="ma-4 pa-0 text-primary font-weight-bold" data-v-63e7c8c8${_scopeId4}> Baixar CV </span>`);
                            } else {
                              return [
                                createVNode("span", { class: "ma-4 pa-0 text-primary font-weight-bold" }, " Baixar CV ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            class: "btn d-flex pa-0 ma-0 rounded-xl",
                            elevation: "3",
                            onClick: downloadResume,
                            color: "secondary"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "ma-4 pa-0 text-primary font-weight-bold" }, " Baixar CV ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, {
                      justify: "end",
                      class: "ma-0 pa-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "ma-0 pa-0 text-textSecondary",
                          style: { "font-size": "1rem", "font-weight": "600" }
                        }, [
                          createTextVNode(' Escreval ("'),
                          createVNode("span", {
                            class: "ma-0 pa-0 text-primary",
                            style: { "font-size": "1.5rem" }
                          }, "Olá, Mundo!!!"),
                          createTextVNode('") ')
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, {
                      justify: "end",
                      class: "ma-0 pa-0 mt-6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          class: "btn d-flex pa-0 ma-0 rounded-xl",
                          elevation: "3",
                          onClick: downloadResume,
                          color: "secondary"
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "ma-4 pa-0 text-primary font-weight-bold" }, " Baixar CV ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                class: "ma-0 pa-0"
              }, {
                default: withCtx(() => [
                  createVNode("h1", {
                    class: "ma-0 pa-0 mb-n2",
                    style: { "font-size": "2rem", "font-weight": "600" }
                  }, "Desenvolvedor"),
                  createVNode(_component_v_row, { class: "d-flex align-center ma-0 pa-0" }, {
                    default: withCtx(() => [
                      createVNode("h1", {
                        class: "spacing text-secondary mr-7 ma-0 pa-0",
                        style: { "font-size": "1.9rem", "font-weight": "600" }
                      }, "FRONT"),
                      createVNode("h1", {
                        class: "spacing text-primary ma-0 pa-0 mr-0",
                        style: { "font-size": "1.9rem", "font-weight": "600" }
                      }, "END")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { class: "d-flex align-center ma-0 pa-0 mt-6" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(link), (i) => {
                        return openBlock(), createBlock(_component_v_card, {
                          key: i.title,
                          href: i.link,
                          target: "_blank",
                          class: "btn ma-0 pa-0 mr-6",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              color: "secondary",
                              icon: i.icon,
                              size: "30",
                              class: "ma-1 pa-0"
                            }, null, 8, ["icon"])
                          ]),
                          _: 2
                        }, 1032, ["href"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("br"),
              createVNode(_component_v_col, {
                cols: "12",
                class: "ma-0 pa-0 mt-10 text-right"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_row, {
                    justify: "end",
                    class: "ma-0 pa-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: "ma-0 pa-0 text-textSecondary",
                        style: { "font-size": "1rem", "font-weight": "600" }
                      }, [
                        createTextVNode(' Escreval ("'),
                        createVNode("span", {
                          class: "ma-0 pa-0 text-primary",
                          style: { "font-size": "1.5rem" }
                        }, "Olá, Mundo!!!"),
                        createTextVNode('") ')
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, {
                    justify: "end",
                    class: "ma-0 pa-0 mt-6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        class: "btn d-flex pa-0 ma-0 rounded-xl",
                        elevation: "3",
                        onClick: downloadResume,
                        color: "secondary"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "ma-4 pa-0 text-primary font-weight-bold" }, " Baixar CV ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-63e7c8c8"]]);
const timeline = [
  {
    mes: "Nov",
    ano: "2022",
    description: "Tive meu primeiro contato com a área de programação, onde essas experiências despertaram meu interesse pela tecnologia."
  },
  {
    mes: "Dez",
    ano: "2023",
    description: "Fui aprovado na Jala University, ficando entre quase 2% dos aprovados do Brasil e entre os 6 selecionados da minha cidade natal."
  },
  {
    mes: "Jul",
    ano: "2024-2028",
    description: "Atualmente, estou me aprimorando com os melhores profissionais na Jala University, com o objetivo de concluir minha formação e me tornar um profissional de excelência."
  }
];
const _sfc_main$3 = {
  __name: "about-me",
  __ssrInlineRender: true,
  setup(__props) {
    const { smAndUp } = useDisplay();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_avatar = resolveComponent("v-avatar");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_timeline = resolveComponent("v-timeline");
      const _component_v_timeline_item = resolveComponent("v-timeline-item");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        id: "about-me",
        class: "container mt-6"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ma-0 pa-0" data-v-de06be3e${_scopeId}><br data-v-de06be3e${_scopeId}><h2 class="topics text-primary" data-v-de06be3e${_scopeId}>Sobre Mim</h2>`);
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "ma-0 pa-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, {
                    justify: "space-between",
                    class: "d-flex align-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "7",
                          class: "d-flex align-center text-center"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div data-v-de06be3e${_scopeId4}><p class="ma-0 pa-0 text-justify" data-v-de06be3e${_scopeId4}> Sou um desenvolvedor front-end cursando Engenharia de Software na <span class="font-weight-bold" data-v-de06be3e${_scopeId4}><a data-v-de06be3e${_scopeId4}><a href="https://jala.university/" target="_blank" class="text-secondary text-decoration-none" data-v-de06be3e${_scopeId4}>Jala University</a></a></span>. Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos. </p></div>`);
                            } else {
                              return [
                                createVNode("div", null, [
                                  createVNode("p", { class: "ma-0 pa-0 text-justify" }, [
                                    createTextVNode(" Sou um desenvolvedor front-end cursando Engenharia de Software na "),
                                    createVNode("span", { class: "font-weight-bold" }, [
                                      createVNode("a", null, [
                                        createVNode("a", {
                                          href: "https://jala.university/",
                                          target: "_blank",
                                          class: "text-secondary text-decoration-none"
                                        }, "Jala University")
                                      ])
                                    ]),
                                    createTextVNode(". Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos. ")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_col, {
                          cols: "12",
                          sm: "5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="perfil d-flex justify-center mt-4 mt-sm-0" data-v-de06be3e${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_avatar, {
                                class: "border-lg",
                                color: "secondary",
                                rounded: "1",
                                size: "200"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_img, {
                                      src: "https://github.com/victorpessoa01.png",
                                      cover: ""
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_img, {
                                        src: "https://github.com/victorpessoa01.png",
                                        cover: ""
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "perfil d-flex justify-center mt-4 mt-sm-0" }, [
                                  createVNode(_component_v_avatar, {
                                    class: "border-lg",
                                    color: "secondary",
                                    rounded: "1",
                                    size: "200"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: "https://github.com/victorpessoa01.png",
                                        cover: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "7",
                            class: "d-flex align-center text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("p", { class: "ma-0 pa-0 text-justify" }, [
                                  createTextVNode(" Sou um desenvolvedor front-end cursando Engenharia de Software na "),
                                  createVNode("span", { class: "font-weight-bold" }, [
                                    createVNode("a", null, [
                                      createVNode("a", {
                                        href: "https://jala.university/",
                                        target: "_blank",
                                        class: "text-secondary text-decoration-none"
                                      }, "Jala University")
                                    ])
                                  ]),
                                  createTextVNode(". Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos. ")
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "5"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "perfil d-flex justify-center mt-4 mt-sm-0" }, [
                                createVNode(_component_v_avatar, {
                                  class: "border-lg",
                                  color: "secondary",
                                  rounded: "1",
                                  size: "200"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: "https://github.com/victorpessoa01.png",
                                      cover: ""
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, {
                      justify: "space-between",
                      class: "d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "7",
                          class: "d-flex align-center text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("p", { class: "ma-0 pa-0 text-justify" }, [
                                createTextVNode(" Sou um desenvolvedor front-end cursando Engenharia de Software na "),
                                createVNode("span", { class: "font-weight-bold" }, [
                                  createVNode("a", null, [
                                    createVNode("a", {
                                      href: "https://jala.university/",
                                      target: "_blank",
                                      class: "text-secondary text-decoration-none"
                                    }, "Jala University")
                                  ])
                                ]),
                                createTextVNode(". Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos. ")
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "perfil d-flex justify-center mt-4 mt-sm-0" }, [
                              createVNode(_component_v_avatar, {
                                class: "border-lg",
                                color: "secondary",
                                rounded: "1",
                                size: "200"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: "https://github.com/victorpessoa01.png",
                                    cover: ""
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br data-v-de06be3e${_scopeId}><br data-v-de06be3e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "ma-0 pa-0 mt-15"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(smAndUp)) {
                    _push3(ssrRenderComponent(_component_v_timeline, { direction: "horizontal" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(timeline), (i) => {
                            _push4(ssrRenderComponent(_component_v_timeline_item, {
                              key: i.mes,
                              "dot-color": "secondary",
                              class: "ma-0 pa-0 text-start algign-center"
                            }, {
                              opposite: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<h3 class="text-primary" data-v-de06be3e${_scopeId4}>${ssrInterpolate(i.mes)}/${ssrInterpolate(i.ano)}</h3>`);
                                } else {
                                  return [
                                    createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1)
                                  ];
                                }
                              }),
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div data-v-de06be3e${_scopeId4}><p data-v-de06be3e${_scopeId4}>${ssrInterpolate(i.description)}</p></div>`);
                                } else {
                                  return [
                                    createVNode("div", null, [
                                      createVNode("p", null, toDisplayString(i.description), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline), (i) => {
                              return openBlock(), createBlock(_component_v_timeline_item, {
                                key: i.mes,
                                "dot-color": "secondary",
                                class: "ma-0 pa-0 text-start algign-center"
                              }, {
                                opposite: withCtx(() => [
                                  createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1)
                                ]),
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    createVNode("p", null, toDisplayString(i.description), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_v_timeline, { side: "end" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(timeline), (i) => {
                            _push4(ssrRenderComponent(_component_v_timeline_item, {
                              key: i.mes,
                              "dot-color": "secondary",
                              class: "ma-0 pa-0 text-start algign-center"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<h3 class="text-primary" data-v-de06be3e${_scopeId4}>${ssrInterpolate(i.mes)}/${ssrInterpolate(i.ano)}</h3><div data-v-de06be3e${_scopeId4}><p data-v-de06be3e${_scopeId4}>${ssrInterpolate(i.description)}</p></div>`);
                                } else {
                                  return [
                                    createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1),
                                    createVNode("div", null, [
                                      createVNode("p", null, toDisplayString(i.description), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline), (i) => {
                              return openBlock(), createBlock(_component_v_timeline_item, {
                                key: i.mes,
                                "dot-color": "secondary",
                                class: "ma-0 pa-0 text-start algign-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1),
                                  createVNode("div", null, [
                                    createVNode("p", null, toDisplayString(i.description), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(smAndUp) ? (openBlock(), createBlock(_component_v_timeline, {
                      key: 0,
                      direction: "horizontal"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline), (i) => {
                          return openBlock(), createBlock(_component_v_timeline_item, {
                            key: i.mes,
                            "dot-color": "secondary",
                            class: "ma-0 pa-0 text-start algign-center"
                          }, {
                            opposite: withCtx(() => [
                              createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("p", null, toDisplayString(i.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_v_timeline, {
                      key: 1,
                      side: "end"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline), (i) => {
                          return openBlock(), createBlock(_component_v_timeline_item, {
                            key: i.mes,
                            "dot-color": "secondary",
                            class: "ma-0 pa-0 text-start algign-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1),
                              createVNode("div", null, [
                                createVNode("p", null, toDisplayString(i.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "ma-0 pa-0" }, [
                createVNode("br"),
                createVNode("h2", { class: "topics text-primary" }, "Sobre Mim"),
                createVNode(_component_v_col, {
                  cols: "12",
                  class: "ma-0 pa-0"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, {
                      justify: "space-between",
                      class: "d-flex align-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "7",
                          class: "d-flex align-center text-center"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode("p", { class: "ma-0 pa-0 text-justify" }, [
                                createTextVNode(" Sou um desenvolvedor front-end cursando Engenharia de Software na "),
                                createVNode("span", { class: "font-weight-bold" }, [
                                  createVNode("a", null, [
                                    createVNode("a", {
                                      href: "https://jala.university/",
                                      target: "_blank",
                                      class: "text-secondary text-decoration-none"
                                    }, "Jala University")
                                  ])
                                ]),
                                createTextVNode(". Atualmente, me dedico no desenvolvimento de projetos que unem estudos e propósito, como meu portfólio profissional e um site de livros católicos online. Estou em busca de novas oportunidades para expandir minhas habilidades e contribuir para projetos significativos. ")
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "5"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "perfil d-flex justify-center mt-4 mt-sm-0" }, [
                              createVNode(_component_v_avatar, {
                                class: "border-lg",
                                color: "secondary",
                                rounded: "1",
                                size: "200"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: "https://github.com/victorpessoa01.png",
                                    cover: ""
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("br"),
                createVNode("br"),
                createVNode(_component_v_col, {
                  cols: "12",
                  class: "ma-0 pa-0 mt-15"
                }, {
                  default: withCtx(() => [
                    unref(smAndUp) ? (openBlock(), createBlock(_component_v_timeline, {
                      key: 0,
                      direction: "horizontal"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline), (i) => {
                          return openBlock(), createBlock(_component_v_timeline_item, {
                            key: i.mes,
                            "dot-color": "secondary",
                            class: "ma-0 pa-0 text-start algign-center"
                          }, {
                            opposite: withCtx(() => [
                              createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1)
                            ]),
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("p", null, toDisplayString(i.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_v_timeline, {
                      key: 1,
                      side: "end"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(timeline), (i) => {
                          return openBlock(), createBlock(_component_v_timeline_item, {
                            key: i.mes,
                            "dot-color": "secondary",
                            class: "ma-0 pa-0 text-start algign-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("h3", { class: "text-primary" }, toDisplayString(i.mes) + "/" + toDisplayString(i.ano), 1),
                              createVNode("div", null, [
                                createVNode("p", null, toDisplayString(i.description), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/about-me.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AboutMe = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-de06be3e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "skills",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_rating = resolveComponent("v-rating");
      _push(ssrRenderComponent(_component_v_container, mergeProps({
        id: "skills",
        class: "container"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<br data-v-28767f21${_scopeId}><div class="ma-0 pa-0" data-v-28767f21${_scopeId}><h2 class="topics text-primary" data-v-28767f21${_scopeId}>Habilidades</h2>`);
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              class: "ma-0 pa-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<br data-v-28767f21${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_row, {
                    class: "ma-0 pa-0 d-flex justify-center",
                    wrap: "nowrap"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(lang), (i) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "auto",
                            key: i.name,
                            style: { color: i.color },
                            class: "lang text-center d-flex flex-column align-center ma-2 pa-2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, {
                                  icon: i.icon,
                                  size: "70"
                                }, null, _parent5, _scopeId4));
                                _push5(`<span class="ma-0 pa-0" data-v-28767f21${_scopeId4}>${ssrInterpolate(i.name)}</span>`);
                                _push5(ssrRenderComponent(_component_v_rating, {
                                  modelValue: i.star,
                                  "onUpdate:modelValue": ($event) => i.star = $event,
                                  "full-icon": "mdi-star",
                                  "half-icon": "mdi-star-half",
                                  size: "small",
                                  density: "compact",
                                  readonly: ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_icon, {
                                    icon: i.icon,
                                    size: "70"
                                  }, null, 8, ["icon"]),
                                  createVNode("span", { class: "ma-0 pa-0" }, toDisplayString(i.name), 1),
                                  createVNode(_component_v_rating, {
                                    modelValue: i.star,
                                    "onUpdate:modelValue": ($event) => i.star = $event,
                                    "full-icon": "mdi-star",
                                    "half-icon": "mdi-star-half",
                                    size: "small",
                                    density: "compact",
                                    readonly: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(lang), (i) => {
                            return openBlock(), createBlock(_component_v_col, {
                              cols: "auto",
                              key: i.name,
                              style: { color: i.color },
                              class: "lang text-center d-flex flex-column align-center ma-2 pa-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  icon: i.icon,
                                  size: "70"
                                }, null, 8, ["icon"]),
                                createVNode("span", { class: "ma-0 pa-0" }, toDisplayString(i.name), 1),
                                createVNode(_component_v_rating, {
                                  modelValue: i.star,
                                  "onUpdate:modelValue": ($event) => i.star = $event,
                                  "full-icon": "mdi-star",
                                  "half-icon": "mdi-star-half",
                                  size: "small",
                                  density: "compact",
                                  readonly: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["style"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("br"),
                    createVNode(_component_v_row, {
                      class: "ma-0 pa-0 d-flex justify-center",
                      wrap: "nowrap"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(lang), (i) => {
                          return openBlock(), createBlock(_component_v_col, {
                            cols: "auto",
                            key: i.name,
                            style: { color: i.color },
                            class: "lang text-center d-flex flex-column align-center ma-2 pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: i.icon,
                                size: "70"
                              }, null, 8, ["icon"]),
                              createVNode("span", { class: "ma-0 pa-0" }, toDisplayString(i.name), 1),
                              createVNode(_component_v_rating, {
                                modelValue: i.star,
                                "onUpdate:modelValue": ($event) => i.star = $event,
                                "full-icon": "mdi-star",
                                "half-icon": "mdi-star-half",
                                size: "small",
                                density: "compact",
                                readonly: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["style"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("br"),
              createVNode("div", { class: "ma-0 pa-0" }, [
                createVNode("h2", { class: "topics text-primary" }, "Habilidades"),
                createVNode(_component_v_col, {
                  cols: "12",
                  class: "ma-0 pa-0"
                }, {
                  default: withCtx(() => [
                    createVNode("br"),
                    createVNode(_component_v_row, {
                      class: "ma-0 pa-0 d-flex justify-center",
                      wrap: "nowrap"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(lang), (i) => {
                          return openBlock(), createBlock(_component_v_col, {
                            cols: "auto",
                            key: i.name,
                            style: { color: i.color },
                            class: "lang text-center d-flex flex-column align-center ma-2 pa-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: i.icon,
                                size: "70"
                              }, null, 8, ["icon"]),
                              createVNode("span", { class: "ma-0 pa-0" }, toDisplayString(i.name), 1),
                              createVNode(_component_v_rating, {
                                modelValue: i.star,
                                "onUpdate:modelValue": ($event) => i.star = $event,
                                "full-icon": "mdi-star",
                                "half-icon": "mdi-star-half",
                                size: "small",
                                density: "compact",
                                readonly: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["style"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Skills = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-28767f21"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_container = resolveComponent("v-container");
  _push(ssrRenderComponent(_component_v_container, mergeProps({
    id: "project",
    class: "container"
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/project.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e7afbc4d"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "container bg-background" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Home, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(AboutMe, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Skills, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Project, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Home),
              createVNode(AboutMe),
              createVNode(Skills),
              createVNode(Project)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d07d66be"]]);
export {
  index as default
};
//# sourceMappingURL=index-C4_cHE0W.js.map
