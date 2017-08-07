/**
 * Add the forEach() method to NodeList objects
 *
 * @author Brett DeWoody <brettdewoody@gmail.com>
 */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
