# Gallery view
When: user is on start page  
Then: 
- 30 images are displaed
- Text "Pictures(30)" is visible
- The cards have the same height (200) and will adapt the width to preserve the aspect ratio of the images
- Every card has a number, the author name and the  "Download" button/”no download” message
- The correct order is: number, author, button/message
- The numbers go sequentially  
- If the image has at least 4 Megapixel (4 x 106 pixel) and the width, respectively height have min 2000px then the download link is active
# Detail view
Given: user is on start page  
When: user clicks on the image card  
Then:
-  The detail view of the image is opened (other cards are not shown)
- The card has a number, the author name and button "Download"/”no download” message (all is visible)
- The correct order is: number, author, button/message
- The author's name and a number are the same as on the start page
- Text "Back" is visible
- The same image display as on the start page (height 500)
# Back button
Given: User is on the image card  
When: User clicks on the button "Back"   
Then: Start page is displayed

# Downlonding from gallery
Given: User is on start page   
When: User clicks on the button "Download"     
Then: Image is downloaded
# Downlonding from detail view
Given: User is on the  image card   
When: User clicks on the button "Download"   
Then: Image is downloaded
