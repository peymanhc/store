import React from "react";
import MetaDescriptions from "utils/MetaDescriptions";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import Arshive from "components/arshive/Arshive";
import Post from "components/post/Post";
import postimg from "assets/tiger.jpg";
import { useParams } from "react-router-dom";
import WidgetList from "components/widgetList/WidgetList";
import * as statements from "constants/statements";
import Elementors from "constants/elementor";
import { UseblogShowItem } from "hooks/blog";
import parse from "html-react-parser";
import CircleprogressLoading from "components/circleprogressLoading/CircleprogressLoading";
import { UseBlogList } from "hooks/blog";

const useStyles = makeStyles((theme) => ({
  griditem: {
    [theme.breakpoints.down("md")]: {
      marginTop: 20,
    },
  },
}));

function Blog() {
  const params = useParams();
  const classes = useStyles();
  const text = statements.default;
  const { data: blogshow, isLoading: blogLoading } = UseblogShowItem(params.id);
  const { data: blogList, isLoading: blogsListLoading } = UseBlogList("", "");
  console.log(blogList?.post);
  return (
    <Box>
      <MetaDescriptions
        title={`وبلاگ-${blogshow?.content?.title}`}
        descriptions={"this is Blog page ."}
      />
      <Container maxWidth="lg">
        <Grid style={{ marginTop: "25px" }} container>
          <Grid className={classes.griditem} item md={9} sm={6} xs={12}>
            {blogLoading ? (
              <CircleprogressLoading />
            ) : (
              <Post
                title={blogshow?.content?.title}
                image={blogshow?.content?.pic}
                text={blogshow?.content?.content}
              />
            )}
          </Grid>
          <Grid className={classes.griditem} item md={3} sm={6} xs={12}>
            {blogsListLoading ? (
              <CircleprogressLoading />
            ) : (
              <Arshive
                title={text.blogTitle}
                arshiveimg={blogshow?.content?.pic}
                arshiveTitle={blogshow?.content?.title}
                arshiveDate={blogshow?.content?.date}
                posts={blogList?.post}
              />
            )}
            <Box marginTop="20px">
              <WidgetList title={text.importantList} listitem={Elementors} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const posts = [
  {
    id: 0,
    title: "قیمت گوگل پیکسل ۵ فاش شد؛ خبر بد برای گلکسی اس ۲۰",
    image: postimg,
    date: "1400-01-14",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 1,
    title: "نقد فیلم حقیقت؛ درامی فرانسوی به زیبایی کاترین",
    image: postimg,
    date: "1399-09-۳۰",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 2,
    title: "چرا باید بهترین ها را داشته باشیم؟ به سادگی",
    image: postimg,
    date: "1398-11-15",
    text:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
];
export default Blog;
