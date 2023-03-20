# Gallery view
1.
When: user opens start page  
Then: 
- 30 images are displaed
- Text "Pictures(30)" is visible
- The cards have the same height (200) and will adapt the width to preserve the aspect ratio of the images
- Every card has a number, the author name and the  "Download" button/”no download” message
- The correct order is: number, author, button/message
- The numbers go sequentially 
2. Given: user opens start page  
When: user clicks on the image card  
Then:
-  the detail view of the image is opened (other cards are not shown)
- The card has a number, the author name and button "Download"/”no download” message (all is visible)
- The correct order is: number, author, button/message
- The author's name and a number are the same as on the start page
- Text "Back" is visible
- The detail view will display the same content card as on the start page
- an expanded image (height 500px)
# Cards
1. Given: user opens start page and click on the image card  
When: user clicks on the button "Back"   
Then: start page is displayed

# Download link
1. Given: open start page and click on the image card
When: the image has at least 4 Megapixel (4 x 106 pixel) and the width, respectively height have min 2000px.  
Then: The download link is active
2. Given: open start page and click on the   image card
When:click on the button "Download" 
Then: image is downloaded
3. Given: open start page
When:click on the button "Download" 
Then: image is downloaded
