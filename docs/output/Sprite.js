Ext.data.JsonP.Sprite({"tagname":"class","name":"Sprite","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Sprite","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Sprite","meta":{},"id":"method-constructor"},{"name":"changeFrame","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-changeFrame"},{"name":"clone","tagname":"method","owner":"Sprite","meta":{},"id":"method-clone"},{"name":"draw","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-draw"},{"name":"frameNumberToRowCol","tagname":"method","owner":"Sprite","meta":{},"id":"method-frameNumberToRowCol"},{"name":"getFrame","tagname":"method","owner":"Sprite","meta":{},"id":"method-getFrame"},{"name":"getNumFrames","tagname":"method","owner":"Sprite","meta":{},"id":"method-getNumFrames"},{"name":"nextFrame","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-nextFrame"},{"name":"prevFrame","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-prevFrame"},{"name":"reset","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-reset"},{"name":"runLoop","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-runLoop"},{"name":"setFrame","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-setFrame"},{"name":"setLoop","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-setLoop"},{"name":"startLoop","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-startLoop"},{"name":"stopLoop","tagname":"method","owner":"Sprite","meta":{"chainable":true},"id":"method-stopLoop"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":247,"files":[{"filename":"sprite.js","href":"sprite2.html#Sprite"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"getImageFromCache","tagname":"method","owner":"Sprite","meta":{"static":true},"id":"static-method-getImageFromCache"},{"name":"preloadImages","tagname":"method","owner":"Sprite","meta":{"static":true},"id":"static-method-preloadImages"},{"name":"saveImageToCache","tagname":"method","owner":"Sprite","meta":{"static":true},"id":"static-method-saveImageToCache"}],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sprite2.html#Sprite' target='_blank'>sprite.js</a></div></pre><div class='doc-contents'><p>Support sprite animation.</p>\n\n<ul>\n<li>Animations are always run left-to-right, top-to-bottom.</li>\n<li>All frames in the loop are assumed to be the same size.</li>\n<li>Rows and columns (the row, col, startRow, startCol, endRow, and endCol\nproperties) are zero-indexed, while frame number starts at 1. Usually\nframe 1 will have row and column values (0, 0).</li>\n<li>Use <a href=\"#!/api/SpriteMap\" rel=\"SpriteMap\" class=\"docClass\">SpriteMap</a>s to maintain multiple loops in the same image.</li>\n<li>This class assumes that the properties passed in make sense (i.e. the\nstarting cell occurs before the ending cell, the image has nonzero\ndimensions, etc.). Otherwise behavior is undefined.</li>\n<li>All public methods that do not exist to get specific values return <code>this</code>\n(and therefore are chainable).</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sprite-method-constructor' class='name expandable'>Sprite</a>( <span class='pre'>src, [options]</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></div><div class='description'><div class='short'>Creates a new Sprite instance. ...</div><div class='long'><p>Creates a new Sprite instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : String<div class='sub-desc'><p>The file path of the base image.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object whose properties affect how the sprite is animated. Each of the\n  properties will be attached to the Sprite object directly, along with\n  other calculated properties. It is best to call <a href=\"#!/api/Sprite-method-getFrame\" rel=\"Sprite-method-getFrame\" class=\"docClass\">Sprite.getFrame</a>() if you\n  need information about the currently displayed frame. You can read other\n  properties if you need to, but it is strongly recommended not to set\n  properties directly because the resulting behavior is undefined.</p>\n<ul><li><span class='pre'>frameW</span> : Number (optional)<div class='sub-desc'><p>The width of each frame of the sprite. Defaults to the image width.</p>\n</div></li><li><span class='pre'>frameH</span> : Number (optional)<div class='sub-desc'><p>The height of each frame of the sprite. Defaults to the image height.</p>\n</div></li><li><span class='pre'>projectedW</span> : Number (optional)<div class='sub-desc'><p>The width of each frame when it is displayed on the canvas (allowing you\n  to scale the frame). Defaults to the frame width.</p>\n</div></li><li><span class='pre'>projectedH</span> : Number (optional)<div class='sub-desc'><p>The height of each frame when it is displayed on the canvas (allowing you\n  to scale the frame). Defaults to the frame height.</p>\n</div></li><li><span class='pre'>startRow</span> : Number (optional)<div class='sub-desc'><p>The row at which the animation loop should start.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>startCol</span> : Number (optional)<div class='sub-desc'><p>The column at which the animation loop should start.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>endRow</span> : Number (optional)<div class='sub-desc'><p>The row at which the animation loop should stop. Animations will run from\n  (startRow, startCol) to (endRow, endCol), inclusive. Defaults to the last\n  row in the image.</p>\n</div></li><li><span class='pre'>endCol</span> : Number (optional)<div class='sub-desc'><p>The column at which the animation loop should stop. Animations will run\n  from (startRow, startCol) to (endRow, endCol), inclusive. Defaults to the\n  last column in the image.</p>\n</div></li><li><span class='pre'>squeeze</span> : Boolean (optional)<div class='sub-desc'><p>By default, animation loops are assumed to run all the way to the end of\n  each row before continuing at the start of the next row. For example, a\n  valid arrangement of loops in an image might look like this:</p>\n\n<pre><code>  AAAA\n  AABB\n  BBBC\n  CCDD\n  DDDD\n</code></pre>\n\n<p>  In this example, the \"C\" loop starts at (2, 2) and ends at (3, 1).\n  However, if the squeeze option is set to true, loops will be contained\n  inside startCol and endCol. For example, a valid arrangement of loops in\n  an image might look like this:</p>\n\n<pre><code>  AABB\n  AABB\n  AACC\n  DDCC\n</code></pre>\n\n<p>  Now the \"C\" loop starts at (2, 2) and ends at (3, 3) and all its frames\n  occur within the box formed by those coordinates.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>interval</span> : Number (optional)<div class='sub-desc'><p>The delay in milliseconds before switching frames when running the\n  animation loop.</p>\n<p>Defaults to: <code>125</code></p></div></li><li><span class='pre'>useTimer</span> : Boolean (optional)<div class='sub-desc'><p>If true, Sprite animation loops rely on setInterval() to update their\n  frames regularly (this is the default). If false, the Sprite will rely on\n  being drawn as the \"tick\" that lets it update its frames. This can be\n  slightly less accurate than using a timer (assuming the sprite gets drawn\n  on every canvas repaint; otherwise it can be a lot less accurate, and in\n  any case it can be up to 15ms off on Windows) but it is more\n  performance-friendly and also ensures that frames will never skip if the\n  sprite is not drawn.</p>\n<p>Defaults to: <code>true</code></p></div></li><li><span class='pre'>advanceFramesManually</span> : Boolean (optional)<div class='sub-desc'><p>If options.useTimer is false and this setting is true, frames will not be\n  advanced automatically and must be advanced manually instead (i.e. using\n  <a href=\"#!/api/Sprite-method-nextFrame\" rel=\"Sprite-method-nextFrame\" class=\"docClass\">Sprite.nextFrame</a>() or <a href=\"#!/api/Sprite-method-changeFrame\" rel=\"Sprite-method-changeFrame\" class=\"docClass\">Sprite.changeFrame</a>()).</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>flipped</span> : Object (optional)<div class='sub-desc'><p>An object with \"horizontal\" and \"vertical\" properties (both Booleans)\n  indicating whether the Sprite should be drawn flipped along the horizontal\n  or vertical axes.</p>\n<p>Defaults to: <code>{horizontal: false, vertical: false}</code></p></div></li><li><span class='pre'>postInitCallback</span> : Function (optional)<div class='sub-desc'><p>A function that will run at the end of the initialization process (if the\n  source image has not been loaded before, this will be after the image has\n  been fully loaded asynchronously). If the source image was not pre-loaded\n  and you draw() the Sprite before this callback is invoked, nothing will be\n  drawn because the image won't be loaded yet.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> (optional)<div class='sub-desc'><p>The Sprite that was loaded.</p>\n</div></li></ul></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-changeFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-changeFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-changeFrame' class='name expandable'>changeFrame</a>( <span class='pre'>delta</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Move forward or backward a specified number of frames. ...</div><div class='long'><p>Move forward or backward a specified number of frames.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delta</span> : Number<div class='sub-desc'><p>The number of frames by which to move forward or backward (negative\n  values move backward).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Clone the Sprite (return an identical copy). ...</div><div class='long'><p>Clone the Sprite (return an identical copy).</p>\n</div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-draw' class='name expandable'>draw</a>( <span class='pre'>ctx, x, y, [w], [h]</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Draws the sprite. ...</div><div class='long'><p>Draws the sprite.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : CanvasRenderingContext2D<div class='sub-desc'><p>The canvas graphics context onto which the sprite should be drawn.</p>\n</div></li><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The x-coordinate of the canvas graphics context at which the upper-left\n  corner of the Sprite should be drawn. This is usually (but not always)\n  the horizontal distance in pixels from the left side of the canvas.</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>The y-coordinate of the canvas graphics context at which the upper-left\n  corner of the Sprite should be drawn. This is usually (but not always)\n  the vertical distance in pixels from the top of the canvas.</p>\n</div></li><li><span class='pre'>w</span> : Number (optional)<div class='sub-desc'><p>The width of the image when drawn onto the canvas. Defaults to the\n  Sprite's projected width, which in turn defaults to the frame width.</p>\n</div></li><li><span class='pre'>h</span> : Number (optional)<div class='sub-desc'><p>The height of the image when drawn onto the canvas. Defaults to the\n  Sprite's projected height, which in turn defaults to the frame height.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-frameNumberToRowCol' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-frameNumberToRowCol' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-frameNumberToRowCol' class='name expandable'>frameNumberToRowCol</a>( <span class='pre'>frame</span> ) : Object</div><div class='description'><div class='short'>Converts a frame number to row and column numbers. ...</div><div class='long'><p>Converts a frame number to row and column numbers.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>frame</span> : Number<div class='sub-desc'><p>The frame number to convert.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the 'frame' number and the corresponding 'row' and\n  'col' properties.</p>\n</div></li></ul></div></div></div><div id='method-getFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-getFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-getFrame' class='name expandable'>getFrame</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns an object containing the current \"row,\" \"col,\" and \"frame\" number. ...</div><div class='long'><p>Returns an object containing the current \"row,\" \"col,\" and \"frame\" number.</p>\n\n<p>Row and Col are zero-indexed; frame is 1-indexed.</p>\n</div></div></div><div id='method-getNumFrames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-getNumFrames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-getNumFrames' class='name expandable'>getNumFrames</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns the total number of frames in the current animation loop. ...</div><div class='long'><p>Returns the total number of frames in the current animation loop.</p>\n</div></div></div><div id='method-nextFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-nextFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-nextFrame' class='name expandable'>nextFrame</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Advances one frame in the animation loop. ...</div><div class='long'><p>Advances one frame in the animation loop.</p>\n\n<p>This is equivalent to (but more efficient than) <a href=\"#!/api/Sprite-method-changeFrame\" rel=\"Sprite-method-changeFrame\" class=\"docClass\">Sprite.changeFrame</a>(1).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-prevFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-prevFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-prevFrame' class='name expandable'>prevFrame</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Goes back one frame in the animation loop. ...</div><div class='long'><p>Goes back one frame in the animation loop.</p>\n\n<p>This is equivalent to <a href=\"#!/api/Sprite-method-changeFrame\" rel=\"Sprite-method-changeFrame\" class=\"docClass\">Sprite.changeFrame</a>(-1). It is provided as a\nconvenience and to complement <a href=\"#!/api/Sprite-method-nextFrame\" rel=\"Sprite-method-nextFrame\" class=\"docClass\">Sprite.nextFrame</a>().</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Reset the animation to its first frame. ...</div><div class='long'><p>Reset the animation to its first frame.</p>\n\n<p>Usually you will want to call <a href=\"#!/api/Sprite-method-stopLoop\" rel=\"Sprite-method-stopLoop\" class=\"docClass\">Sprite.stopLoop</a>() immediately before\n<a href=\"#!/api/Sprite-method-reset\" rel=\"Sprite-method-reset\" class=\"docClass\">Sprite.reset</a>(); otherwise the animation will keep running (if it was\nrunning already).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-runLoop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-runLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-runLoop' class='name expandable'>runLoop</a>( <span class='pre'>[callback], [startRow], [startCol], [endRow], [endCol], [squeeze], [flipped]</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Runs the animation loop once. ...</div><div class='long'><p>Runs the animation loop once.</p>\n\n<p>The loop concludes at the final frame and does not reset to the first\nframe. Use the callback function to reset it if you need that behavior.</p>\n\n<p>Usually this function will be called without parameters since it defaults\nto using the sprite's settings defined at instantiation time. In cases\nwhere the frames that should be used in an animation change, this function\ntakes the same parameters as <a href=\"#!/api/Sprite-method-setLoop\" rel=\"Sprite-method-setLoop\" class=\"docClass\">Sprite.setLoop</a>() for convenience; using these\nparameters is equivalent to calling sprite.setLoop(params).startLoop().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>A callback function to run after the loop has completed, or a falsey\n  value to skip this argument.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> (optional)<div class='sub-desc'><p>The Sprite that was animated.</p>\n</div></li></ul></div></li><li><span class='pre'>startRow</span> : Number (optional)<div class='sub-desc'><p>The row of the frame at which animation should start. Defaults to the\n  starting row of the current animation sequence.</p>\n</div></li><li><span class='pre'>startCol</span> : Number (optional)<div class='sub-desc'><p>The column of the frame at which animation should start. Defaults to the\n  starting column of the current animation sequence.</p>\n</div></li><li><span class='pre'>endRow</span> : Number (optional)<div class='sub-desc'><p>The row of the frame at which animation should end. Defaults to the\n  ending row of the current animation sequence unless startRow and\n  startCol are specified, in which case it defaults to the last row in the\n  image.</p>\n</div></li><li><span class='pre'>endCol</span> : Number (optional)<div class='sub-desc'><p>The column of the frame at which animation should end. Defaults to the\n  ending column of the current animation sequence unless startRow and\n  startCol are specified, in which case it defaults to the last column in\n  the image.</p>\n</div></li><li><span class='pre'>squeeze</span> : Boolean (optional)<div class='sub-desc'><p>A Boolean determining whether startCol and endCol define a box within\n  which to find frames for this animation, or whether frames from any\n  column can be used (after startCol in startRow and before endCol in\n  endRow). For more information on how this works, see the documentation\n  for the <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> constructor. Defaults to the squeeze setting for\n  the current animation sequence unless startRow and startCol are\n  specified, in which case it defaults to false.</p>\n</div></li><li><span class='pre'>flipped</span> : Object (optional)<div class='sub-desc'><p>An object with \"horizontal\" and \"vertical\" properties (both Booleans)\n  indicating whether the Sprite should be drawn flipped along the\n  horizontal or vertical axes. Defaults to the flipped setting for the\n  current animation sequence unless startRow and startCol are specified,\n  in which case it defaults to {horizontal: false, vertical: false}.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setFrame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-setFrame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-setFrame' class='name expandable'>setFrame</a>( <span class='pre'>row, col</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Moves to a specific frame in the animation loop. ...</div><div class='long'><p>Moves to a specific frame in the animation loop.</p>\n\n<p>This function supports passing either a frame number or row and column\ncoordinates as parameters. Frames outside of the accepted range will\noverflow/underflow.</p>\n\n<p>You may want to call <a href=\"#!/api/Sprite-method-stopLoop\" rel=\"Sprite-method-stopLoop\" class=\"docClass\">Sprite.stopLoop</a>() immediately before\n<a href=\"#!/api/Sprite-method-setFrame\" rel=\"Sprite-method-setFrame\" class=\"docClass\">Sprite.setFrame</a>(); otherwise the animation will keep running (if it was\nrunning already).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Number<div class='sub-desc'><p>The row of the frame to which to switch.</p>\n</div></li><li><span class='pre'>col</span> : Number<div class='sub-desc'><p>The column of the frame to which to switch.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setLoop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-setLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-setLoop' class='name expandable'>setLoop</a>( <span class='pre'>startRow, startCol, [endRow], [endCol], [squeeze], [flipped]</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets the range of frames over which the sprite should loop. ...</div><div class='long'><p>Sets the range of frames over which the sprite should loop.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRow</span> : Number<div class='sub-desc'><p>The row of the frame at which animation should start.</p>\n</div></li><li><span class='pre'>startCol</span> : Number<div class='sub-desc'><p>The column of the frame at which animation should start.</p>\n</div></li><li><span class='pre'>endRow</span> : Number (optional)<div class='sub-desc'><p>The row of the frame at which animation should end. Defaults to the last\n  row in the image.</p>\n</div></li><li><span class='pre'>endCol</span> : Number (optional)<div class='sub-desc'><p>The column of the frame at which animation should end. Defaults to the\n  last column in the image.</p>\n</div></li><li><span class='pre'>squeeze</span> : Boolean (optional)<div class='sub-desc'><p>A Boolean determining whether startCol and endCol define a box within\n  which to find frames for this animation, or whether frames from any\n  column can be used (after startCol in startRow and before endCol in\n  endRow). For more information on how this works, see the documentation\n  for the <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> constructor.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>flipped</span> : Object (optional)<div class='sub-desc'><p>An object with \"horizontal\" and \"vertical\" properties (both Booleans)\n  indicating whether the Sprite should be drawn flipped along the\n  horizontal or vertical axes.</p>\n<p>Defaults to: <code>{horizontal: false, vertical: false}</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-startLoop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-startLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-startLoop' class='name expandable'>startLoop</a>( <span class='pre'>[startRow], [startCol], [endRow], [endCol], [squeeze], [flipped]</span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Starts running a new animation loop. ...</div><div class='long'><p>Starts running a new animation loop.</p>\n\n<p>Usually this function will be called without parameters since it defaults\nto using the sprite's settings defined at instantiation time. In cases\nwhere the frames that should be used in an animation change, this function\ntakes the same parameters as <a href=\"#!/api/Sprite-method-setLoop\" rel=\"Sprite-method-setLoop\" class=\"docClass\">Sprite.setLoop</a>() for convenience; using these\nparameters is equivalent to calling sprite.setLoop(params).startLoop().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRow</span> : Number (optional)<div class='sub-desc'><p>The row of the frame at which animation should start. Defaults to the\n  starting row of the current animation sequence.</p>\n</div></li><li><span class='pre'>startCol</span> : Number (optional)<div class='sub-desc'><p>The column of the frame at which animation should start. Defaults to the\n  starting column of the current animation sequence.</p>\n</div></li><li><span class='pre'>endRow</span> : Number (optional)<div class='sub-desc'><p>The row of the frame at which animation should end. Defaults to the\n  ending row of the current animation sequence unless startRow and\n  startCol are specified, in which case it defaults to the last row in the\n  image.</p>\n</div></li><li><span class='pre'>endCol</span> : Number (optional)<div class='sub-desc'><p>The column of the frame at which animation should end. Defaults to the\n  ending column of the current animation sequence unless startRow and\n  startCol are specified, in which case it defaults to the last column in\n  the image.</p>\n</div></li><li><span class='pre'>squeeze</span> : Boolean (optional)<div class='sub-desc'><p>A Boolean determining whether startCol and endCol define a box within\n  which to find frames for this animation, or whether frames from any\n  column can be used (after startCol in startRow and before endCol in\n  endRow). For more information on how this works, see the documentation\n  for the <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a> constructor. Defaults to the squeeze setting for\n  the current animation sequence unless startRow and startCol are\n  specified, in which case it defaults to false.</p>\n</div></li><li><span class='pre'>flipped</span> : Object (optional)<div class='sub-desc'><p>An object with \"horizontal\" and \"vertical\" properties (both Booleans)\n  indicating whether the Sprite should be drawn flipped along the\n  horizontal or vertical axes. Defaults to the flipped setting for the\n  current animation sequence unless startRow and startCol are specified,\n  in which case it defaults to {horizontal: false, vertical: false}.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-stopLoop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-method-stopLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-method-stopLoop' class='name expandable'>stopLoop</a>( <span class='pre'></span> ) : <a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Stops running the animation loop. ...</div><div class='long'><p>Stops running the animation loop.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sprite\" rel=\"Sprite\" class=\"docClass\">Sprite</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-getImageFromCache' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-static-method-getImageFromCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-static-method-getImageFromCache' class='name expandable'>getImageFromCache</a>( <span class='pre'>src</span> ) : Image<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Get an image from the cache. ...</div><div class='long'><p>Get an image from the cache.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : String<div class='sub-desc'><p>The file path of the image.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Image</span><div class='sub-desc'><p>The Image object associated with the file or null if the Image object\n  has not yet been cached.</p>\n</div></li></ul></div></div></div><div id='static-method-preloadImages' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-static-method-preloadImages' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-static-method-preloadImages' class='name expandable'>preloadImages</a>( <span class='pre'>files, [options]</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Preload a list of images asynchronously. ...</div><div class='long'><p>Preload a list of images asynchronously.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>files</span> : String[]<div class='sub-desc'><p>An Array of paths to images to preload.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>A map of options for this function.</p>\n<ul><li><span class='pre'>finishCallback</span> : Function (optional)<div class='sub-desc'><p>A function to run when all images have finished loading.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>numLoaded</span> : Number (optional)<div class='sub-desc'><p>The number of images that were preloaded.</p>\n</div></li></ul></div></li><li><span class='pre'>itemCallback</span> : Function (optional)<div class='sub-desc'><p>A function to run when an image has finished loading.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filepath</span> : String (optional)<div class='sub-desc'><p>The file path of the loaded image.</p>\n</div></li><li><span class='pre'>numLoaded</span> : Number (optional)<div class='sub-desc'><p>The number of images that have been loaded so far (including the current\n  one).</p>\n</div></li><li><span class='pre'>numImages</span> : Number (optional)<div class='sub-desc'><p>The total number of images to load.</p>\n</div></li></ul></div></li></ul></div></li></ul></div></div></div><div id='static-method-saveImageToCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sprite'>Sprite</span><br/><a href='source/sprite2.html#Sprite-static-method-saveImageToCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sprite-static-method-saveImageToCache' class='name expandable'>saveImageToCache</a>( <span class='pre'>src, image</span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>Save an image to the cache. ...</div><div class='long'><p>Save an image to the cache.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : String<div class='sub-desc'><p>The file path of the image.</p>\n</div></li><li><span class='pre'>image</span> : Image<div class='sub-desc'><p>The Image object to cache.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});