import mongoos from 'mongoos';

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      type: String,
    },
    Price: {
      type: String,
      default: 0,
    },
    Stock: {
      type: String,
      default: 0,
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'User ',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
