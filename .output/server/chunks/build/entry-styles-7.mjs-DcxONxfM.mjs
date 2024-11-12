const VBtn = '.v-btn{align-items:center;border-radius:4px;display:inline-grid;flex-shrink:0;font-weight:500;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-duration:.28s;transition-property:box-shadow,transform,opacity,background;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.v-btn--size-x-small{--v-btn-size:0.625rem;--v-btn-height:20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size:0.75rem;--v-btn-height:28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size:0.875rem;--v-btn-height:36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size:1rem;--v-btn-height:44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size:1.125rem;--v-btn-height:52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height))}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) - 8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) - 12px)}.v-btn{border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity)*var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity)*var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity)*var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity))*var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity))*var(--v-theme-overlay-multiplier))}}.v-btn--variant-outlined,.v-btn--variant-plain,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 5px 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 0 0 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-btn--variant-outlined{border:thin solid}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;border-radius:inherit;bottom:0;left:0;opacity:var(--v-activated-opacity);pointer-events:none;right:0;top:0}.v-btn .v-btn__underlay{position:absolute}@supports selector(:focus-visible){.v-btn:after{border:2px solid;border-radius:inherit;content:"";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .2s ease-in-out;width:100%}.v-btn:focus-visible:after{opacity:calc(var(--v-theme-overlay-multiplier)*.25)}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size:1rem}.v-btn--icon.v-btn--density-default{height:calc(var(--v-btn-height) + 12px);width:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{height:calc(var(--v-btn-height));width:calc(var(--v-btn-height))}.v-btn--icon.v-btn--density-compact{height:calc(var(--v-btn-height) - 8px);width:calc(var(--v-btn-height) - 8px)}.v-btn--elevated:focus,.v-btn--elevated:hover{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 1px 10px 0 var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity,rgba(0,0,0,.2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity,rgba(0,0,0,.14)),0 3px 14px 2px var(--v-shadow-key-ambient-opacity,rgba(0,0,0,.12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{opacity:.26;pointer-events:none}.v-btn--disabled:hover{opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{background:rgb(var(--v-theme-surface));box-shadow:none;color:rgba(var(--v-theme-on-surface),.26);opacity:1}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__append,.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend{opacity:0}.v-btn--stacked{align-content:center;grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__prepend{margin-inline:0}.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__prepend{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size:0.625rem;--v-btn-height:56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size:0.75rem;--v-btn-height:64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size:0.875rem;--v-btn-height:72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size:1rem;--v-btn-height:80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size:1.125rem;--v-btn-height:88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height))}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) - 16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) - 24px)}.v-btn--slim{padding:0 8px}.v-btn--readonly{pointer-events:none}.v-btn--rounded{border-radius:24px}.v-btn--rounded.v-btn--icon{border-radius:4px}.v-btn .v-icon{--v-icon-size-multiplier:0.8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier:1}.v-btn--stacked .v-icon{--v-icon-size-multiplier:1.1428571429}.v-btn--stacked.v-btn--block{min-width:100%}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loader>.v-progress-circular{height:1.5em;width:1.5em}.v-btn__append,.v-btn__content,.v-btn__prepend{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline:calc(var(--v-btn-height)/-9) calc(var(--v-btn-height)/4.5)}.v-btn--slim .v-btn__prepend{margin-inline-start:0}.v-btn__append{grid-area:append;margin-inline:calc(var(--v-btn-height)/4.5) calc(var(--v-btn-height)/-9)}.v-btn--slim .v-btn__append{margin-inline-end:0}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline:calc(var(--v-btn-height)/-9) calc(var(--v-btn-height)/4.5)}.v-btn__content>.v-icon--end{margin-inline:calc(var(--v-btn-height)/4.5) calc(var(--v-btn-height)/-9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-pagination .v-btn{border-radius:4px}.v-pagination .v-btn--rounded{border-radius:50%}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}';

export { VBtn as V };
//# sourceMappingURL=entry-styles-7.mjs-DcxONxfM.mjs.map