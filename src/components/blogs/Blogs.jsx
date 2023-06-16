import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Hearts } from 'react-loader-spinner';

import styles from './Blogs.module.css';
import 'animate.css';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devdexsoftware',
        );

        const extractedBlogs = response.data.items;

        setBlogs(extractedBlogs);
        setLoading(false);
      } catch (error) {
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className={styles.main__cover}>
      <h1 className="animate__animated animate__heartBeat">Blogs</h1>
      {loading && (
        <div className={styles.loading}>
          <Hearts
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible
          />
        </div>
      )}
      {blogs?.map((blog) => (
        <article key={blog.pubDate}>
          <h2 className={styles.title}>{blog.title}</h2>
          <div className={styles.about__blog}>
            <div role="group" className={styles.pub__date}>
              <span>Published Date:</span>
              <p className={styles.date}>
                {moment(blog.pubDate).format('YYYY-MM-DD HH:mm:ss')}
              </p>
            </div>
            <div role="group" className={styles.author}>
              <span>Author:</span>
              <p className={styles.author}>{blog.author}</p>
            </div>
          </div>
          <p className={styles.main_blog}>
            {blog.content.replace(/<[^>]*>/g, '')}
          </p>
          <a href={blog.guid} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </article>
      ))}
      <ToastContainer />
    </main>
  );
}

export default Blogs;
