// Color Bash prompt in example block
$(document).ready(function () {
  'use strict';

  // prevent selectable in shell prompt
  function span (x) {
    var pre = '<span onmousedown=\"return false;\" onselectstart=\"return false;\">';
    var pos = '</span>';
    // extra is to make commandline can easy copy without copy the prompt
    var extra = '<span style="width: 0; height: 0; display: inline-block; overflow: hidden;"><span style="display: block;"></span></span>';
    return pre + x + pos + extra;
  }

  var userHighlight  = span ('<font color=\"lightgreen\">$1</font><font color=\"lightblue\">$2</font>');
  var rootHighlight  = span ('<font color=\"crimson\">$1</font><font color=\"lightblue\">$2</font>');
  var promptHighlight  = span ('<font color=\"#FFFF75\">$1 </font>');

  var nothing  = span ('$1 ');

  // https://regex101.com/#javascript
  function color_shell_prompt(className) {
    var block = document.getElementsByClassName(className);
    for(var i = 0, l = block.length; i < l; i++) {
      // highlight `user@hostname directory $'
      block[i].innerHTML = block[i].innerHTML.replace(/^(\w*@\w*)(\s*[:~](.+)\/([^/]+)[$]\s)/mg, userHighlight);
      // highlight `user@hostname ~ $'
      block[i].innerHTML = block[i].innerHTML.replace(/^(\w*@\w*)(\s*[:~](.*)([^/]+)[$]\s)/mg, userHighlight);
      // highlight `root@hostname #'
      block[i].innerHTML = block[i].innerHTML.replace(/^(root@\w*)(\s*[:~](.+)\/([^/]+)[#]\s)/mg, rootHighlight);
      // highlight `hostname #'
      block[i].innerHTML = block[i].innerHTML.replace(/^(\w*)(\s*[:~](.+)\/([^/]+)[#]\s)/mg, rootHighlight);
      // highlight `hostname directory #' (Gentoo Linux root)
      block[i].innerHTML = block[i].innerHTML.replace(/^(\w*)(\s*\w* [#])/mg, rootHighlight);
    }
  }

  function color_clojure_prompt(className) {
  var block = document.getElementsByClassName(className);
    for(var i = 0, l = block.length; i < l; i++) {
      // highlight `user> ` or `user=>` (clojure repl)
      block[i].innerHTML = block[i].innerHTML.replace(/^(user&gt;)\s/mg, promptHighlight);
      block[i].innerHTML = block[i].innerHTML.replace(/^(user>\s)/mg, promptHighlight);
      // this should not change color
      block[i].innerHTML = block[i].innerHTML.replace(/^(user=&gt;)\s/mg, nothing);
      block[i].innerHTML = block[i].innerHTML.replace(/^(user=>\s)/mg, nothing);
      block[i].innerHTML = block[i].innerHTML.replace(/^(\s\s#_=&gt;)\s/mg, nothing);
      block[i].innerHTML = block[i].innerHTML.replace(/^(\s\s#_=>\s)/mg, nothing);
    }
  }

  // color some class with shellprompt
  color_shell_prompt('example');
  color_shell_prompt('src src-sh');
  color_clojure_prompt('example');
  color_clojure_prompt('src src-clojure');
});


function toggle_visible(id) {
  // toggle the conten
  var e = document.getElementById(id);
  if (e.style.display == 'block' || e.style.display=='') e.style.display = 'none';
  else e.style.display = 'block';
}
