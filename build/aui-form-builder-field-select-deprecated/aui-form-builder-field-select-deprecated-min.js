YUI.add("aui-form-builder-field-select-deprecated",function(e,t){var n=e.Lang,r=e.Escape,i=e.getClassName,s=i("form","control"),o=i("form-builder-field"),u=i("form-builder-field","node"),a='<select id="{id}" class="'+[u,s].join(" ")+'" name="{name}" value="{value}"></select>',f=e.Component.create({NAME:"form-builder-select-field",ATTRS:{multiple:{setter:e.DataType.Boolean.parse,value:!1},template:{valueFn:function(){return a}}},UI_ATTRS:e.FormBuilderField.UI_ATTRS.concat(["multiple","predefinedValue"]),CSS_PREFIX:o,EXTENDS:e.FormBuilderMultipleChoiceField,prototype:{getHTML:function(){var e=this;return n.sub(e.get("template"),{id:r.html(e.get("id")),label:r.html(e.get("label")),name:r.html(e.get("name")),value:r.html(e.get("predefinedValue"))})},getPropertyModel:function(){var t=this,n=t.getStrings(),r=e.FormBuilderSelectField.superclass.getPropertyModel.apply(t,arguments);return r.push({attributeName:"multiple",editor:new e.RadioCellEditor({options:{"true":n.yes,"false":n.no}}),formatter:e.bind(t._booleanFormatter,t),name:n.multiple}),r},_uiSetMultiple:function(e){var t=this,n=t.get("templateNode");e?n.setAttribute("multiple","multiple"):n.removeAttribute("multiple"),t.predefinedValueEditor.set("multiple",e)}}});e.FormBuilderSelectField=f,e.FormBuilderField.types.select=e.FormBuilderSelectField},"3.0.3-deprecated.28",{requires:["aui-form-builder-field-deprecated"]});
