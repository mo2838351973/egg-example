// exports.index = async ctx => {
//   console.log(ctx.query.name)
//     ctx.body = `name: ${ctx.query.name}`;
//   };
const Controller = require('../core/base_controller');
class NameController extends Controller {
  async index(ctx) {
    const posts = `name: ${ctx.query.name}`;
    this.success(posts);
  }
}
module.exports = NameController;