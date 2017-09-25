/* A class to make css transitions and transforms easier to handle */
Normalize = function() {};
Normalize.touchEvent = function(event)
{
  if (event.pageX == null && original.clientX != null)
  {
        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
};

Normalize.transform = function(dom, transform)
{
  if(dom)
  {
    dom.style.webkitTransform = transform;
    dom.style.mozTransform = transform;
    dom.style.transform = transform;

  }
};

Normalize.transformOrigin = function(dom, origin)
{
  if(dom)
  {
    dom.style.webkitTransformOrigin = origin;
    dom.style.mozTransformOrigin = origin;
    dom.style.transformOrigin = origin;
  }
};

Normalize.transition = function(dom, transition)
{
  if(dom) {
    dom.style.webkitTransition = transition;
    dom.style.mozTransition = transition;
    dom.style.transition = transition;
  }
};