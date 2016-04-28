#Code Assessment

##Tasks:

1) Create a webpage with Javascript that (using ajax) gets a JSON document (test_feed.json) and builds a data structure that captures the count of each word in the content of the "bodyHtml" field(s).

2) Utilize the Chart.js library (http://www.chartjs.org/) to visualize the results. You're free to implement it in anyway you see fit, including the use of other libraries.

### Time Limit: 4 hours

Please try to complete this exercise within four hours. If you're not able to complete it by then, please provide me with a link to your work along with a list of challenges, reasons they were a challenge, and how you would overcome them if you had more time. It's more important to see your process and approach than production-ready code (though it doesn't hurt).

I'll be looking for correctness, thoughtfulness, efficiency, and intent. The goal is to demonstrate your abilities in parsing and manipulating data as well as your ability to use a third-party library.

################################# Ernest's List of Challenges ####################################

The most challenging thing for me was to try and get that chart.js library to even load.  I kept getting this error:

require.js:168 Uncaught Error: Module name "core/core.js" has not been loaded yet for context: _. Use require([])

I figured out why this was happening, but once it was functioning properly I was able to show the data on a chart.

The documentation wasn't very helpful and I even went to the Q and A page for chart.js and nothing there was useful either.

Also, I'd try to style it to make it look much better than it does at the moment.

################################### UPDATE ##########################################

After looking over everything again, I realized that I interpreted the instructions in a different way (counting the number
of words in each bodyHtml property and displaying the count), but I've created a new branch called "revision" that counts
every word throughout the entire feed and displays it's count.