!function(a){acf.add_action("ready append",function(t){acf.get_fields({type:"svg_icon"},t).each(function(){!function(t){var n=t.find(".acf-input input"),s=a(n).attr("data-allow-clear")||0,i={dropdownCssClass:"bigdrop widefat",dropdownAutoWidth:!0,templateResult:function(t){return t.id?t.url?(e(t.url,t.id,t.text),a('<span class="acf_svg__span" data-id="'+t.id+'">'+t.text+"</span>")):a('<span class="acf_svg__span"><svg class="acf_svg__icon icon '+t.id+'" aria-hidden="true" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'+t.id+'"></use></svg>'+t.text+"</span>"):t.text},templateSelection:function(t){return t.id?t.url?(e(t.url,t.id,t.text),a('<span class="acf_svg__span" data-id="'+t.id+'">'+t.text+"</span>")):a('<span class="acf_svg__span"><svg class="acf_svg__icon small icon '+t.id+'" aria-hidden="true" role="img"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'+t.id+'"></use></svg>'+t.text+"</span>"):t.text},data:svg_icon_format_data,allowClear:1==s};async function e(t,n,s){var i=await fetch(t),e=await i.text();a('span[data-id="'+n+'"]').html(e+s)}n.select2(i)}(a(this))})})}(jQuery);