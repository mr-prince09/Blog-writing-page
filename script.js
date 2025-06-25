
document.getElementById("blogForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const content = document.getElementById("content").value;

  localStorage.setItem("blogTitle", title);
  localStorage.setItem("blogAuthor", author);
  localStorage.setItem("blogContent", content);

  window.location.href = "read_blog.html";
});
