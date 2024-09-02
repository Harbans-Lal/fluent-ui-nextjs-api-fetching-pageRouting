import * as React from "react";

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
} from "@fluentui/react-components";
import {  ShareRegular,AddCircleRegular,DeleteDismissFilled  } from "@fluentui/react-icons";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "450px",
    maxWidth: "100%",
  },
});

const ImageCard = ({id, items}) => {
  const styles = useStyles();
  const  width = "150px"
  const height = "150px"
  return (
    <div key={id} className="m-3">
          <Card className={styles.card}>
      <CardHeader
        image={
          <img
            width={width}
            height={height}
            src={items.images[0]}
            alt="Elvia Atkins avatar picture"
          />
        }
       
      
      />

      <div>
        <h1 className="text-xl">{items.title}</h1>
        <p>{items.description}</p>
        <p>Category: {items.category}</p>
        <h3 className="text-lg">Price : ${items.price}</h3>
      </div>

      <CardFooter>
        <Button icon={<AddCircleRegular fontSize={16} />}>Add</Button>
        <Button icon={<DeleteDismissFilled fontSize={16} />}>Delete</Button>
      </CardFooter>
    </Card>
    </div>
  
  );
};

export default ImageCard;