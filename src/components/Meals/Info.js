import { Card, CardMedia, Divider, List, ListItem } from "@mui/material"
import { ExternalLink } from "react-external-link"

export const Info =() => {
    return (
        <div
        style={{
          margin: "auto",
          display: "table",
        }}>
            <List>
                <Card>
                <CardMedia
                    component='img'
                    height='194'
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/American_Diabetes_Association_logo.svg/2560px-American_Diabetes_Association_logo.svg.png"></CardMedia>
        <ListItem> 
        <ExternalLink href="https://diabetes.org/tools-support">
           <span>American Diabetes Association</span>  
        </ExternalLink>
        </ListItem>
        </Card>
<Divider/>

        <Card>
        <CardMedia
                    component='img'
                    height='194'
                    image="https://www.ncdhd.com/files/Diabetes%20Education.png"></CardMedia>
        <ListItem> <ExternalLink href="https://www.diabeteseducator.org/living-with-diabetes">
            <span>Diabetes Educator</span>
        </ExternalLink>
        </ListItem>
        </Card>
<Divider/>
<Card>
<CardMedia
                    component='img'
                    height='194'
                    image="https://dam.upmc.com/-/media/chp/for-parents/images/homepage/healthtools_chp.png?h=600&la=en&w=600&rev=227270223f154fafa1f150bbe1c86e50&hash=E5F1270372AF8806F1F80B18805A94DA"></CardMedia>
        <ListItem> <ExternalLink href="https://www.childrensomaha.org/department/endocrinology-diabetes/diabetes-resources/">
            <span>Childrens Hospital and Medical Center Omaha</span>
        </ExternalLink>
        </ListItem>
</Card>

<Card>
    <CardMedia
                    component='img'
                    height='194'
                    image="https://m.media-amazon.com/images/I/71LVIYlTviL._AC_UF1000,1000_QL80_.jpg"></CardMedia>
        <ListItem> <ExternalLink href="https://beyondtype1.org/type-1-diabetes-childrens-books/">
            <span>Beyond Type 1. Books for children</span>
        </ExternalLink>
        </ListItem>
</Card>

<Card>
<CardMedia
                    component='img'
                    height='194'
                    image="https://cdn.writermag.com/2020/10/shutterstock_1090844153.jpg"></CardMedia>
        <ListItem> <ExternalLink href="https://beyondtype1.org/snail-mail-club/">
            <span>Snail mail club for a pen pal</span>
        </ExternalLink>
        </ListItem>
</Card>

<Card>
<CardMedia
                    component='img'
                    height='194'
                    image="https://www.hopkinsmedicine.org/-/media/images/patient-stories/simon-story-type-1-diabetes/endocrinology-simon-teaser.ashx?h=320&iar=0&w=560&hash=D538CC5CB8C9D445E0EC4FABB0821F33"></CardMedia>
        <ListItem> <ExternalLink href="https://childrenwithdiabetes.com/">
            <span>Resources for Children with Diabetes</span>
        </ExternalLink>
        </ListItem>
</Card>
       </List> </div>

    )
}