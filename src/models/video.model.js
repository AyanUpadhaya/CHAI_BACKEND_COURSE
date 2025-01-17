import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const config = {
  type: String,
  required: true,
};

const videoSchema = new Schema(
  {
    videoFile: config,
    thumbnail: config,
    title: config,
    description: config,
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate);



export const Video = mongoose.model("Video", videoSchema);
